const axios = require("axios");

const slackTemplate = require("./slackTemplates/template");

const qs = require('querystring');

const sendSlack = function(leadData) {

    const message = slackTemplate(leadData);

    const body = Object.assign({ token: process.env.SLACK_TOKEN, channel: process.env.SLACK_CHANNEL_ID }, message);
    
    axios.post('https://slack.com/api/chat.postMessage', qs.stringify(body))
    .then((response) => {
        console.log(response);
    })
    .catch(error => {
         console.log(error);
    });



}

module.exports=sendSlack;