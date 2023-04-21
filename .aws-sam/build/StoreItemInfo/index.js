const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

exports.handler = async (event) => {

    try {
      body = await docClient.put(JSON.parse(event.body)).promise();
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({parseCount})
        };
    } catch (error) {
        console.log(error.message);
        return {
            statusCode: 500,
            body: JSON.stringify({message: "Error parse feeds"})
        };
    }


}