const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://yash:yash1234@users-o5hee.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})