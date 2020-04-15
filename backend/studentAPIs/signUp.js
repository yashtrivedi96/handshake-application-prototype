const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const kafka=require('../kafka/client')


router.post('/', async (req, res) => {
  req.body.path="student-signup"
 
   
  kafka.make_request('studentAuth', req.body, (err, results) => {



    res.status(results.status).end(JSON.parse(results.data));

  });

})
  
  module.exports = router;