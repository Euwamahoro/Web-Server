const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  const visitorName = req.query.visitor_name || 'Guest';
  const clientIP = req.ip;
  const location = 'New York'; // Replace with actual location logic if needed
  const temperature = '11 degrees Celsius'; // Replace with actual temperature logic if needed

  const greeting = `Hello, ${visitorName}! The temperature is ${temperature} in ${location}.`;

  res.json({
    client_ip: clientIP,
    location: location,
    greeting: greeting
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
