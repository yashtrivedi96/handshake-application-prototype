
const Employer=require('./../models/employer')

getCompanyHandler = async (msg, callback) => {
  var res={}
  const _id = msg.id

  try {
    const user = await Employer.findById(_id)

    if (!user) {
      res.status = 404
      callback(null, res)
    }
    res.status = 200
    res.data = JSON.stringify(user)
    callback(null, res)
  } catch (e) {
    console.log(e)
    callback(null, "err")
  }
}

updateCompanyhandler = async (msg, callback) => {
  var res={}
  try {
    const user = await Employer.findByIdAndUpdate(msg.id, msg)

    if (!user) {
      res.status = 404
      callback(null, res)

    }

    res.status = 200
    res.data = JSON.stringify(user)
    callback(null, res)
  } catch (e) {
    res.status = 400
    callback(null, res)
  }
}


function handle_request(msg, callback) {
  if (msg.path === 'get-company-profile') {
    delete msg.path
    getCompanyHandler(msg, callback)
  }
  if (msg.path === 'update-company-profile') {
    delete msg.path
    updateCompanyhandler(msg, callback)
  }
};

exports.handle_request = handle_request;