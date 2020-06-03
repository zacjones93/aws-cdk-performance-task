exports.handler = async function (event) {
  console.log("event: ", JSON.stringify(event, null, 2));
  console.log("is production?", process.env.isProduction);

  return {
    statusCode: 200,
    headers: {"Content-Type": "text/plain"},
    body: `Hello, egghead friends! You've hit ${event.path}`,
  }
}