const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const kafka = require('../kafka/client');

router.get('/', (req, res) => {
  req.body.path = "get-all-events"
  req.body.companyName = req.query.name;

  kafka.make_request('events', req.body, (err, results) => {

    console.log(results)

    res.status(results.status).send(JSON.parse(results.data));

  });
});

router.get('/:id', (req, res) => {
  req.body.id = req.params.id;
  req.body.path = "get-event-by-id"

  kafka.make_request('events', req.body, (err, results) => {

    res.status(results.status).send(JSON.parse(results.data));

  });
});

router.post('/', (req, res) => {
  req.body.path = "post-event"

  kafka.make_request('events', req.body, (err, results) => {


    
    res.status(results.status).send(JSON.parse(results.data));
  });
});




router.put('/:id', (req, res) => {

  req.body.id = req.params.id;
  req.body.path = "post-register-for-event"

  kafka.make_request('events', req.body, (err, results) => {


    res.status(results.status).send(JSON.parse(results.data));
  });
});

module.exports = router;
