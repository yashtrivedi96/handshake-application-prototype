
const Employer = require('../models/employer')

const loginHandler = async (msg, callback) => {
  var res={}
  try {
    const user = await Employer.findOne(msg)

    console.log(user)
    if (!user) {
      res.status = 404
      callback(null, res)
    }
    res.data = JSON.stringify(user)
    res.status = 200
    return callback(null, res)
  } catch (e) {
    res.status = 500
    callback(null, "err")
  }

}

const signupHandler = async (msg, callback) => {
  res = {}
  const user = new Employer(msg)
  try {
    await user.save()
    res.data = JSON.stringify(user)
    res.status = 201
    callback(null, res)
  } catch (e) {
    res.status = 400
    callback(e, res)
  }

}


function handle_request(msg, callback) {
  var res = {};
  if (msg.path === 'company-login') {
    delete msg.path
    loginHandler(msg, callback)
  }
  else if (msg.path === 'company-signup') {
    delete msg.path
    signupHandler(msg, callback)
  }
};

exports.handle_request = handle_request;