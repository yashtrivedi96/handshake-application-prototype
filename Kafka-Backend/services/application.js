const JobPost = require('../models/job')
const Student = require('./../models/student')

updateApplicationHandler = async (msg, callback) => {
    var res = {}

    const { applicationId, status } = msg

    try {
        const student = await Student.findById(msg.id)
        student.applications.filter((application) => {
            if (application.applicationId == applicationId) {
                application.status = status
            }
        })
        await student.save()
        console.log(student);
        res.status = 200
        res.data = JSON.stringify(student)
        callback(null, res)
        return
    } catch (e) {
        console.log(e)
        res.status = 500
        callback(null, res)
        return
    }
}

applyHandler = async (msg, callback) => {
    var res = {}
    const student = msg.student

    try {
        if (student) {
            const post = await JobPost.findById(msg.id)
            if (!post) {
                res.status = 404
                callback(null, res)
                return
            }
            post.students.push(student)
            await post.save()
            const user = await Student.findById(student.studentId)
            const { companyName, title, postingDate, deadline, location, salary, jobDescription, category } = post
            const applicationId = post.students[post.students.length - 1]._id
            const status = 'Pending'
            user.applications.push({ applicationId, status, companyName, title, location, salary, jobDescription, category });
            console.log(user.applications);
            await user.save()
            res.status = 200
            res.data = JSON.stringify(user)
            callback(null, res)
            return
        } else {
            const post = await JobPost.findByIdAndUpdate(msg.id, msg)

            if (!post) {
                res.status = 404
                callback(null, res)
                return
            }
            res.status = 200
            res.data = JSON.stringify(post)
            callback(null, res)
        }
    } catch (e) {
        res.status = 400
        callback(null, res)
        return
    }

}

function handle_request(msg, callback) {

    console.log(msg)
    if (msg.path === 'apply') {
        delete msg.path
        applyHandler(msg, callback)

    }
    if (msg.path === "update-application") {
        delete msg.path
        updateApplicationHandler(msg, callback)
    }
};

exports.handle_request = handle_request;