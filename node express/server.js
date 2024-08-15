// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a port to listen on
const port = process.env.PORT || 5000;

// Define a simple route (endpoint)
app.get('/api/test', (req, res) => {
  res.send('Hello, this is your test endpoint!');
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
