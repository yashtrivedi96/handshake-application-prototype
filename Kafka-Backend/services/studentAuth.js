const Student = require('./../models/student')

const loginHandler = async (msg, callback) => {
  var res = {}
  try {
    const user = await Student.findOne(msg)

    if (!user) {
      res.status = 404
      callback(null, res)
    }

    
    res.status = 200
    res.data = JSON.stringify(user)
    callback(null, res)
  } catch (e) {
    res.status = 500
    callback(null, "error")
  }
}

const signupHandler = async (msg, callback) => {
  var res = {}
  const user = new Student(msg)
  try {
    await user.save()
    res.data = JSON.stringify(user)
    res.status = 201
    callback(null, res)
  } catch (e) {
    console.log(e)
    res.status = 400
    console.log("signup failed!!")
    callback(null, "error")
  }
}


function handle_request(msg, callback) {

  if (msg.path === "student-login") {
    delete msg.path
    loginHandler(msg, callback)
  }
  if (msg.path === "student-signup") {
    delete msg.path
    console.log(msg)
    signupHandler(msg, callback)
  }
};

exports.handle_request = handle_request;