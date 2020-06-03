import * as cdk from "@aws-cdk/core";
import * as dynamodb from "@aws-cdk/aws-dynamodb";
import * as lambda from "@aws-cdk/aws-lambda";

export class Backend extends cdk.Construct {
  public readonly handler: lambda.Function;

  constructor(scope: cdk.App, id: string) {
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
