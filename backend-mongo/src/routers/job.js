const express = require('express')
const JobPost = require('../models/job')
const Student = require('../models/student')
const router = new express.Router()

router.post('/jobs', async (req, res) => {
    const post = new JobPost(req.body)

    try {
        await post.save()
        res.status(201).send(post)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/jobs', async (req, res) => {
    const companyName = req.query.name
    console.log(companyName);
    try {
        if(companyName) {
            companyPosts = await JobPost.find({companyName: companyName})
            return res.send(companyPosts);
        }
        const posts = await JobPost.find({})
        res.send(posts)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/jobs/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const post = await JobPost.findById(_id)

        if (!post) {
            return res.status(404).send()
        }

        res.send(post)
    } catch (e) {
        res.status(500).send()
    }
})

router.put('/jobs/:id', async (req, res) => {
    const student = req.body.student
    try {
        if(student) {
            const post = await JobPost.findById(req.params.id)
            if(!post) {
                return res.status(404).send()
            }
            post.students.push(student)
            await post.save()
            const user = await Student.findById(student.studentId)
            const {companyName, title, postingDate, deadline, location, salary, jobDescription, category} = post
            const applicationId = post.students[post.students.length-1]._id
            const status = 'Pending'
            user.applications.push({applicationId, status, companyName, title, location, salary, jobDescription, category});
            console.log(user.applications);
            await user.save()
            res.send(user)
        } else {
            const post = await JobPost.findByIdAndUpdate(req.params.id, req.body)

            if (!post) {
                return res.status(404).send()
            }
            res.send(post)
        }
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/jobs/:id', async (req, res) => {
    try {
        const post = await JobPost.findByIdAndDelete(req.params.id)

        if (!post) {
            return res.status(404).send()
        }

        res.send(post)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router