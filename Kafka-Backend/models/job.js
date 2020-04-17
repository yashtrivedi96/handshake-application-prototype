const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobPostSchema = new Schema({  
    companyName: String,
    title: String,
    postingDate: { 
        type: Date,
        default: Date.now()
    },
    deadline: Date,
    location: String,
    salary: String,
    jobDescription: String,
    category: String,
    students: [{    
        studentId: Schema.Types.ObjectId,
        name: String,
        university: String,
        major: String,
        cgpa: String, 
    }]
})

const JobPost = mongoose.model('jobpost', JobPostSchema);

module.exports = JobPost;