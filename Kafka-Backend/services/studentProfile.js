const Student = require('./../models/student');

getAllStudents = async (msg, callback) => {
  var res = {};
  try {
    const users = await Student.find({});
    res.data = JSON.stringify(users);
    res.status = 200;
    callback(null, res);
  } catch (e) {
    console.log(e);
    callback(null, 'err');
  }
};

updateStudentByIdHandler = async (msg, callback) => {
  var res = {};
  try {
    const user = await Student.findByIdAndUpdate(msg.id, msg, {new: true});
    res.data = JSON.stringify(user);
    res.status = 200;
    callback(null, res);
  } catch (e) {
    console.log(e);
    callback(null, 'err');
  }
};

getStudentByIdHandler = async (msg, callback) => {
  var res = {};
  const _id = msg.id;

  try {
    const user = await Student.findById(_id);

    if (!user) {
      res.data = JSON.stringify(user);
      res.status = 404;
      callback(null, res);
    }
    res.data = JSON.stringify(user);
    res.status = 200;
    callback(null, res);
  } catch (e) {
    callback(null, 'err');
  }
  callback(err, 'Hello-from-handshake!');
};

function handle_request(msg, callback) {
  console.log(msg);
  if (msg.path === 'get-all-students') {
    delete msg.path;
    getAllStudents(msg, callback);
  }
  if (msg.path === 'get-student-by-id') {
    delete msg.path;
    getStudentByIdHandler(msg, callback);
  }
  if (msg.path === 'update-student-by-id') {
    delete msg.path;
    updateStudentByIdHandler(msg, callback);
  }
}

exports.handle_request = handle_request;
