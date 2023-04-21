var AWS = require("aws-sdk");
AWS.config.region = "us-east-1";
var sns = new AWS.SNS({apiVersion: '2012-11-05'})

exports.handler = async event => {

  var eventText = JSON.parse(event.body).body;
  console.log("Received event:", eventText);
  
  var params = {
      Message: eventText,
      Subject: "Test SNS From Lambda",
      TopicArn: process.env.TOPIC_ARN
  };
  
  var publishTextPromise = await sns.publish(params).promise();
  
  console.log(publishTextPromise);
  
  const response = {
        "statusCode": 200,
        "body": JSON.stringify(publishTextPromise),
        "isBase64Encoded": false
    };

  return response;

};