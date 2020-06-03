#!/usr/bin/env node
const cdk = require('@aws-cdk/core');
const { EmailCaputureFormStack } = require('../lib/email-caputure-form-stack');

const app = new cdk.App();
new EmailCaputureFormStack(app, 'EmailCaputureFormStack');
