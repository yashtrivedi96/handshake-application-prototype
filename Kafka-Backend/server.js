var connection = new require('./kafka/connection');
//topics files
var studentAuth = require('./services/studentAuth');
var companyAuth = require('./services/companyAuth');
const application = require('./services/application')
const events = require('./services/events')
const jobs = require('./services/jobs')
const messages = require('./services/messages')
const studentProfile = require('./services/studentProfile')
const companyProfile = require('./services/companyProfile')

require('./db/mongoose')




function handleTopicRequest(topic_name, fname) {
    //var topic_name = 'root_topic';
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('Kafka Server is running ');
    consumer.on('message', function (message) {
        console.log('Message received for ' + topic_name);
        var data = JSON.parse(message.value);

        fname.handle_request(data.data, function (err, res) {
            var payloads = [
                {
                    topic: data.replyTo,
                    messages: JSON.stringify({
                        correlationId: data.correlationId,
                        data: res
                    }),
                    partition: 0
                }
            ];
            producer.send(payloads, function (err, data) {
                console.log(data);
            });
            return;
        });

    });
}


handleTopicRequest("studentAuth", studentAuth);
handleTopicRequest("companyAuth", companyAuth);
handleTopicRequest("studentProfile", studentProfile)
handleTopicRequest('jobs', jobs)
handleTopicRequest('events', events)
handleTopicRequest('applications', application)
handleTopicRequest('messages', messages)
handleTopicRequest('companyProfile', companyProfile)