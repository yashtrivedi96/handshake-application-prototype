// Define imports 
const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json({extended:false}));
app.use(cors({origin:'http://localhost:3001',credentials:true}));

app.use(function(request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    response.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/', (request, response) => response.send('API Test Run Successful'));

// Routes for Student APIs 
app.use('/student/login', require('./studentAPIs/login'));
app.use('/student/signUp', require('./studentAPIs/signUp'));
app.use('/students', require('./studentAPIs/studentProfile'));

// // Routes for Job APIs
 app.use('/jobs', require('./jobAPIs/jobAPIs'));

// // Routes for Event APIs 
 app.use('/events', require('./eventAPIs/eventAPIs'));

// // Routes for Application APIs
 app.use('/applications', require('./applicationAPIs/applicationAPIs'));

// // Routes for Company APIs 
app.use('/company/login', require('./companyAPIs/login'));
app.use('/company/signUp', require('./companyAPIs/signUp'));
 app.use('/company/companyProfile', require('./companyAPIs/companyProfile'));

 app.use('/chats',require('./messages/messages'));

app.listen(3000, () => console.log("Server Listening on port 3000!"));