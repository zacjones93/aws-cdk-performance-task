const cdk = require("@aws-cdk/core")

class Backend extends cdk.Construct {
  /**
   * @param {cdk.App} scope
   * @param {string} id
   */
  constructor(scope, id) {
    super(scope, id);
  } 

}

module.exports = { Backend }