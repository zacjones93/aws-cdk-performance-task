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

const addSubscriber = async (data: {email: string; first_name: string; id: string}) => {
    const {id, email, first_name } = data;
    if (email && email !== "") {
        await dynamo.put({
            TableName: tableName,
            Item: {
                id: "totally_random_id",
                email,
                first_name
            }
        }).promise()
    }

    return email;
}

exports.handler = async function (event: AWSLambda.APIGatewayEvent) {
    try {
        const { httpMethod, body} = event;

        if (httpMethod === "GET") {
            const response = await getAllEmails();

            return createResponse(response.Items || []);
        }

        if (!body) {
            return createResponse("Missing request body", 500);
        }

        const data = JSON.parse(body);

        if (httpMethod === "POST") {
            const subscriber = await addSubscriber(data);
            return subscriber
                ? createResponse(`${subscriber} added to the database`)
                : createResponse("Subscriber is missing", 500)
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