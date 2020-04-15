const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const kafka = require('../kafka/client');



router.get('/:company_id', (req, res) => {
  req.body.path="get-company-profile"
  req.body.id=req.params.company_id


  kafka.make_request('companyProfile', req.body, (err, results) => {
 

    console.log(results)
     res.status(results.status).send(JSON.parse(results.data));

  });
});

router.put('/:company_id', (req, res) => {
  req.body.path="Update-company-profile"
  req.body.id=req.params.company_id

  kafka.make_request('companyProfile', req.body, (err, results) => {
 

    console.log(results)
    res.status(results.status).send(JSON.parse(results.data));

  });
});

module.exports = router;