const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const kafka = require('../kafka/client');

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

module.exports = router;
