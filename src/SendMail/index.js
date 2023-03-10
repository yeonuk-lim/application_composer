const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

exports.handler = async (event) => {

  console.log(JSON.stringify(event, undefined, 2));
  try {

    const params = {
      Destination: {
        ToAddresses: ["yongzher@amazon.com"],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: "<h1>Hello, Application Composer</h1>",
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "AWS Announcements",
        },
      },
      Source: "yongzher@amazon.com",
    };

    const { MessageId } = await ses.sendEmail(params).promise();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ MessageId }),
    };
  } catch (error) {
    console.log(error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error send email" })
    }
  }
}