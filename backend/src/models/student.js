const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    major: String,
    contactNumber: Number,
    dateOfBirth: Date,
    city: String,
    state: String,
    country: String,
    careerObjective: String,
    skillSet: [],
    education: [{
        university: String,
        location: String,
        degree: String,
        major: String,
        yearOfPassing: String,
        cgpa: String
    }],
    experience: [{
        Company: String,
        JobTitle: String,
        location: String,
        description: String,
        startDate: Date,
        endDate: Date
    }],
    applications: [{
        applicationId: Schema.Types.ObjectId,
        status: String,
        companyName: String,
        title: String,
        location: String,
        salary: String,
        jobDescription: String,
        category: String

    }],
    registeredEvents: [{
        registeredEventId: Schema.Types.ObjectId,
        eventId: Schema.Types.ObjectId,
        companyName: String,
        eventName: String,
        eventDescription: String,
        eventLocation: String,
        eligibility: String,
        fromDate: Date,
        toDate: Date,
    }]
})

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;