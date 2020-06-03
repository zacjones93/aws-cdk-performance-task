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

    const helloLambda = new lambda.Function(this, 'HelloLambda', {
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler',
      runtime: lambda.Runtime.NODEJS_12_X,
      memorySize: 256,
      timeout: cdk.Duration.seconds(10),
      environment: {isProduction: "Absolutely not"}
    })

    new apiGateway.LambdaRestApi(this, "Endpoint", {
      handler: helloLambda
    })
  }
}

module.exports = { EmailCaputureFormStack }
