declare const AWS: typeof import("aws-sdk");
declare const tableName: string;
declare const dynamo: import("aws-sdk/clients/dynamodb").DocumentClient;
declare const createResponse: (body: string | AWS.DynamoDB.DocumentClient.ItemList, statusCode?: number) => {
    statusCode: number;
    body: string;
};
declare const getAllEmails: () => Promise<import("aws-sdk/lib/request").PromiseResult<import("aws-sdk/clients/dynamodb").DocumentClient.ScanOutput, import("aws-sdk").AWSError>>;
