const cdk = require("@aws-cdk/core")
const dynamodb = require("@aws-cdk/aws-dynamodb")
const lambda = require("@aws-cdk/aws-lambda")

class Backend extends cdk.Construct {
  handler;
  /**
   * @param {cdk.App} scope
   * @param {string} id
   */
  constructor(scope, id) {
  
    super(scope, id);

    const emailsTable = new dynamodb.Table(this, "Database", {
      partitionKey: {name: "id", type: dynamodb.AttributeType.STRING}
    })

    this.handler = new lambda.Function(this, "EmailHandler", {
      code: lambda.Code.fromAsset("lambda"),
      handler: "emailCapture.handler",
      runtime: lambda.Runtime.NODEJS_12_X,
      environment: {
        TABLE_NAME: emailsTable.tableName
      }
     })
  } 
}

module.exports = { Backend }