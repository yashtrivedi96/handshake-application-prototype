const express = require('express')
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('config');
const Student = require('../models/student')
const router = new express.Router()

aws.config.update({
    secretAccessKey: config.get('secretAccessKey'),
    accessKeyId: config.get('accessKeyId'),
    region: 'us-east-1'
  });
  
const s3 = new aws.S3();
  
const uploadProfilePhoto = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'test-handshake',
        key: function (req, file, cb) {
          console.log(req.params.id);
            cb(null, 'profile_' + req.params.id);
        }
    })
  });
  
const uploadResume = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: 'test-handshake',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        contentDisposition: 'inline',
        key: function (req, file, cb) {
          console.log(req.params.id);
            //console.log(file);
            cb(null, 'resume_' + req.params.id);
        }
    })
  });

router.post('/students', async (req, res) => {
    const user = new Student(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/students/login', async (req, res) => {
    try {
        const user = await Student.findOne(req.body)

        if(!user) {
            res.status(404).send()
        }

        res.send(user)  
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/students', async (req, res) => {
    try {
        const users = await Student.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/students/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await Student.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

router.put('/students/:id', async (req, res) => {

    try {
        const user = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/students/:id', async (req, res) => {
    try {
        const user = await Student.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/students/:id/photo', uploadProfilePhoto.array('upl',1), (req, res, next) => {
    res.status(200).json({msg: 'uploaded'});
  });
  
router.post('/students/:id/resume', uploadResume.array('upl',1), (req, res, next) => {
    res.status(200).json({msg: 'uploaded'});
  });
  
router.put('/application/:id', async (req, res) => {
    const {applicationId, status} = req.body
    
    try {
        const student = await Student.findById(req.params.id)
        student.applications.filter((application) => {
            if(application.applicationId == applicationId) {
                application.status = status
            }
        })
        await student.save()
        console.log(student);
        res.send(student)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router