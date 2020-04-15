const express=require('express')
const router=express.Router()
const kafka = require('../kafka/client');

router.post('/', async (req, res) => {

    req.body.path="create-a-message"
 
   kafka.make_request('messages', req.body, (err, results) => {
 
 
     res.status(results.status).send(JSON.parse(results.data));
 
   });


    // const chat = new Chat(req.body)
    // try {
    //     await chat.save()
    //     res.status(201).send(chat)
    // } catch (e) {
    //     res.status(400).send(e)
    // }
})

router.get('/students/:id', async (req, res) => {
    req.body.id = req.params.id;
    req.body.path="get-chat-by-Student-id"
 
   kafka.make_request('messages', req.body, (err, results) => {
 
    console.log(results)
      res.status(results.status).send(JSON.parse(results.data));
 
   });
    // const userId = req.params.id
    // try {
    //     const chats = await Chat.find({users: {$in: [userId]}})
    //     console.log(chats)
    //     res.send(chats)
    // } catch (e) {
    //     res.status(500).send()
    // }
})

router.get('/:id', async (req, res) => {
    req.body.id = req.params.id;
    req.body.path="get-chats-by-id"
 
   kafka.make_request('messages', req.body, (err, results) => {
 
 
     res.status(results.status).send(JSON.parse(results.data));
 
   });
    // const _id = req.params.id

    // try {
    //     const chat = await Chat.findById(_id)

    //     if (!chat) {
    //         return res.status(404).send()
    //     }

    //     res.send(chat)
    // } catch (e) {
    //     res.status(500).send()
    // }
})

router.put('/:id', async (req, res) => {
    req.body.id = req.params.id;
    req.body.path="update-chats-by-id"
 
   kafka.make_request('messages', req.body, (err, results) => {
 
 
     res.status(results.status).send(JSON.parse(results.data));
 
   });
    // const message = req.body
    // try {
    //     const chat = await Chat.findById(req.params.id)
    //     chat.messages.push(message)
    //     await chat.save()
    //     res.send(chat)
    // } catch (e) {
    //     res.status(400).send(e)
    // }
})


module.exports = router