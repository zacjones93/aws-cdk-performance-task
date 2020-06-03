import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apiGateway from "@aws-cdk/aws-apigateway";
import { Backend } from "./backend"

class EmailCaputureFormStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const backend = new Backend(this, "Backend");

    new apiGateway.LambdaRestApi(this, "Endpoint", {
      handler: backend.handler
    })
  }
}

module.exports = { EmailCaputureFormStack }
