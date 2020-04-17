const express = require('express');
const router = express.Router();
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const kafka = require('../kafka/client');

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


router.put('/:studentId', (req, res) => {
  req.body.id = req.params.studentId;
  req.body.path = 'update-application';
  kafka.make_request('applications', req.body, (err, results) => {
    console.log(results);

    res.status(results.status).send(JSON.parse(results.data));
  });
});

router.put('/new/:jobId', (req, res) => {
  req.body.id = req.params.jobId;
  req.body.path = 'apply';
  kafka.make_request('applications', req.body, (err, results) => {
    console.log(results);

    res.status(results.status).send(JSON.parse(results.data));
  });
});

router.post('/:id/photo', uploadProfilePhoto.array('upl',1), (req, res, next) => {
  res.status(200).json({msg: 'uploaded'});
});

router.post('/:id/resume', uploadResume.array('upl',1), (req, res, next) => {
  res.status(200).json({msg: 'uploaded'});
});

module.exports = router;
