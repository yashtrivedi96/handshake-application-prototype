const Chat = require('../models/chat');

createAMessage = async (msg, callback) => {
  var res = {};
  const chat = new Chat(msg);
  try {
    await chat.save();
    res.status = 201;
    res.data = JSON.stringify(chat);
    callback(null, res);
  } catch (e) {
    res.status = 400;
    callback(null, res);
  }
};

const getMessageByStudentId = async (msg, callback) => {
  var res = {};

  const userId = msg.id;
  try {
    const chats = await Chat.find().elemMatch('users', { userId: userId });
    console.log(chats);
    res.status = 200;
    res.data = JSON.stringify(chats);
    callback(null, res);
  } catch (e) {
    console.log(e);
    res.status = 500;
    callback(null, 'err');
  }
};

getChatsById = async (msg, callback) => {
  var res = {};
  const _id = msg.id;

  try {
    const chat = await Chat.findById(_id);

    if (!chat) {
      res.status = 404;
      callback(null, res);
    }
    res.status = 200;
    res.data = JSON.stringify(chat);
    callback(null, res);
  } catch (e) {
    res.status = 500;
    callback(null, 'err');
  }
};

updateChatsById = async (msg, callback) => {
  var res = {};
  const message = msg;
  try {
    const chat = await Chat.findById(msg.id);
    chat.messages.push(message);
    await chat.save();
    res.status = 200;
    res.data = JSON.stringify(chat);
    callback(null, res);
  } catch (e) {
    res.status = 400;
    callback(null, res);
  }
};

function handle_request(msg, callback) {
  console.log(msg);
  if (msg.path === 'create-a-message') {
    delete msg.path;
    createAMessage(msg, callback);
  } else if (msg.path === 'get-chat-by-Student-id') {
    delete msg.path;
    getMessageByStudentId(msg, callback);
  } else if (msg.path === 'get-chats-by-id') {
    delete msg.path;
    getChatsById(msg, callback);
  } else if (msg.path === 'update-chats-by-id') {
    delete msg.path;
    updateChatsById(msg, callback);
  }
}

exports.handle_request = handle_request;
