const express = require('express')
const Employer = require('../models/employer')
const router = new express.Router()

router.post('/employers', async (req, res) => {
    const user = new Employer(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/employers/login', async (req, res) => {
    try {
        const user = await Employer.findOne(req.body)

        if(!user) {
            res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/employers', async (req, res) => {
    try {
        const users = await Employer.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/employers/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await Employer.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

router.put('/employers/:id', async (req, res) => {
    
    try {
        const user = await Employer.findByIdAndUpdate(req.params.id, req.body)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/employers/:id', async (req, res) => {
    try {
        const user = await Employer.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router