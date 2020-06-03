const cdk = require('@aws-cdk/core');
const lambda = require("@aws-cdk/aws-lambda")
const apiGateway = require("@aws-cdk/aws-apigateway")
const {Backend} = require("./backend")

class EmailCaputureFormStack extends cdk.Stack {
  /**
   * @param {cdk.App} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const backend = new Backend(this, "Backend");

    new apiGateway.LambdaRestApi(this, "Endpoint", {
      handler: backend.handler
    })
  }
}

module.exports = { EmailCaputureFormStack }
