const axios = require('axios');

exports.handler = async (event) => {
  const visitorName = event.queryStringParameters.visitor_name || 'Guest';
  const clientIp = event.headers['x-nf-client-connection-ip'];
  
  // Fetch location and temperature (mock example)
  const location = 'New York';
  const temperature = 11; // Mock temperature

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
