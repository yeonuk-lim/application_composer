exports.handler = async (event) => {
  var message = event.Records[0].Sns.Message;
  console.log('consume sqs message event', message);
};