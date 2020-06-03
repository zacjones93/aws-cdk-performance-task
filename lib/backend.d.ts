import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
export declare class Backend extends cdk.Construct {
    readonly handler: lambda.Function;
    constructor(scope: cdk.App, id: string);
}
