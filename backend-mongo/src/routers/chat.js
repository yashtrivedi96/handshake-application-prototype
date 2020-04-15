const express = require('express')
const Chat = require('../models/chat')
const router = new express.Router()

router.post('/chats', async (req, res) => {
    const chat = new Chat(req.body)
    try {
        await chat.save()
        res.status(201).send(chat)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/students/:id/chats', async (req, res) => {
    const userId = req.params.id
    try {
        const chats = await Chat.find().elemMatch("users", {userId: userId})
        console.log(chats)
        res.send(chats)
    } catch (e) { 
        res.status(500).send(e)
    }
})

router.get('/chats/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const chat = await Chat.findById(_id)

        if (!chat) {
            return res.status(404).send()
        }

        res.send(chat)
    } catch (e) {
        res.status(500).send()
    }
})

router.put('/chats/:id', async (req, res) => {
    const message = req.body
    try {
        const chat = await Chat.findById(req.params.id)
        chat.messages.push(message)
        await chat.save()
        res.send(chat)
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router
