/// <reference types="aws-sdk" />
const AWS = require("aws-sdk");

const tableName = process.env.TABLE_NAME || "";
const dynamo = new AWS.DynamoDB.DocumentClient();

const createResponse = (
    body: string | AWS.DynamoDB.DocumentClient.ItemList,
    statusCode = 200
) => {
    return {
        statusCode,
        body: JSON.stringify(body, null, 2)
    };
};

const getAllEmails = async () => {
    const scanResult = await dynamo
        .scan({
            TableName: tableName
        })
        .promise();

    return scanResult;
};

exports.handler = async function (event) {
    try {
        const { httpMethod, body} = event;

        if (httpMethod === "GET") {
            const response = await getAllEmails();

            return createResponse(response.Items || []);
        }
        return createResponse(
            `We only accept GET requests for now, not ${httpMethod}`,
            500
        );
    } catch (error) {
        console.log(error);
        return createResponse(error, 500);
    }
};