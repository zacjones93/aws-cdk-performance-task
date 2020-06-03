const cdk = require("@aws-cdk/core")
const dynamodb = require("@aws-cdk/aws-dynamodb")

class Backend extends cdk.Construct {
  /**
   * @param {cdk.App} scope
   * @param {string} id
   */
  constructor(scope, id) {
    super(scope, id);

    new dynamodb.Table(this, "Database", {
      partitionKey: {name: "id", type: dynamodb.AttributeType.STRING}
    })
  } 

}

module.exports = { Backend }