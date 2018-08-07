<h1 align="center">
    <a href="https://github.com/vazco">vazco</a>/Slackonymous
</h1>

&nbsp;

AWS Lambda function for Slack *Slash Command* that will reply messages back, but anonymously.

## Setup

1. Clone repository and `npm install` all dependencies.
1. Configure your AWS credentials according to [Serverless docs](https://serverless.com/framework/docs/providers/aws/guide/credentials/).
1. Deploy with `npm run full-deploy`.
1. Create new Slash Command in your Slack workspace
    - Set Lambda endpoint as a URL
    - Configure command name, bot name, icon etc.

## License

<img src="https://vazco.eu/banner.png" align="right">

**Like every package maintained by [Vazco](https://vazco.eu/), Slackonymous is [MIT licensed](https://github.com/vazco/uniforms/blob/master/LICENSE).**
