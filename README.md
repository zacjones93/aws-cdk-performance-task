# Welcome to Build an App with the AWS Cloud Development Kit project!

This is my attempt to solve the project as described in [Build an App with the AWS Cloud Development Kit Notes](https://github.com/eggheadio-projects/build-an-app-with-the-AWS-cloud-development-kit-notes)

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`EmailCaputureFormStack`) which contains an Amazon Lambda function that is connected to a dynamodb table.

## Get Started
You'll notice that there is a `frontend` folder in this application as well. If you want to run this app yourself you will need to `yarn install` in the root of the directory (which will install your AWS projects). Then you will need to `cd` into the `frontend` folder and `yarn install` again.

Run `cdk deploy` in the root of the project
Create a `.env` file and set the AWS lambda url.
`cd frontend` and `yarn start` to start the application

## Useful commands
 * `cdk deploy`           deploy this stack to your default AWS account/region
 * `npm run test`         perform the jest unit tests
 * `cdk diff`             compare deployed stack with current state
 * `cdk synth`            emits the synthesized CloudFormation template
