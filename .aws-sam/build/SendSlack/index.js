let Slack = require('slack-node');
let webhookUri = "SLACK URL"; 
let slack = new Slack();

exports.handler = (event) => {

console.log(JSON.stringify(event, undefined, 2));

var message = event.Records[0].Sns.Message;

slack.setWebhook(webhookUri);

slack.webhook(
  {
    "text": "메시지 잘가는지 테스트 해보겠습니다" + message,
  }, (err, response) => {
    if (err) { console.log(response) }
    else { console.log(response) }
  });
}