const express = require('express')
const EventPost = require('../models/event')
const Student = require('../models/student')
const router = new express.Router()

router.post('/events', async (req, res) => {
    const post = new EventPost(req.body)

    try {
        await post.save()
        res.status(201).send(post)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/events', async (req, res) => {
    const companyName = req.query.name;
    try {
        if(companyName) {
            const companyEvents = await EventPost.find({companyName: companyName});
            return res.send(companyEvents);
        }
        const posts = await EventPost.find({})
        res.send(posts)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/events/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const post = await EventPost.findById(_id)

        if (!post) {
            return res.status(404).send()
        }

        res.send(post)
    } catch (e) {
        res.status(500).send()
    }
})

router.put('/events/:id', async (req, res) => {
    const student = req.body.student
    try {
        if(student) {
            const post = await EventPost.findById(req.params.id)
            if(!post) {
                return res.status(404).send()
            }
            post.students.push(student)
            await post.save()
            const user = await Student.findById(student.studentId)
            const {companyName, eventName, eventDescription, eventLocation, eligibility, fromDate, toDate} = post
            const registeredEventId = post.students[post.students.length-1]._id;
            const eventId = post._id;
            console.log(registeredEventId);
            user.registeredEvents.push({eventId, registeredEventId, companyName, eventName, eventDescription, eventLocation, eligibility, fromDate, toDate})
            await user.save()
            res.send(user)
        } else {
            const post = await EventPost.findByIdAndUpdate(req.params.id, req.body)

            if (!post) {
                return res.status(404).send()
            }

            res.send(post)
        }
        
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/events/:id', async (req, res) => {
    try {
        const post = await EventPost.findByIdAndDelete(req.params.id)

        if (!post) {
            return res.status(404).send()
        }

        res.send(post)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router