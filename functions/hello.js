const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const visitorName = event.queryStringParameters.visitor_name || "Visitor";
  const clientIp = event.headers['client-ip'] || "Unknown";
  const location = "New York"; // You may replace this with actual location logic if available
  const temperature = 11; // Replace with actual temperature fetching logic if needed

  const response = {
    client_ip: clientIp,
    location: location,
    greeting: `Hello, ${visitorName}! The temperature is ${temperature} degrees Celsius in ${location}.`
  };

  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};
