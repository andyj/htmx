// Import the required modules
const express = require('express');
const path = require('path');

// Initialise the express application
const app = express();

// Declare the port number
const port = 3010;

// Serve static files from the '../static' directory
app.use(express.static('../static'));

// Route for the root URL ('/')
// Sends the 'index.html' file as a response
app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

// Route for '/tabledata' URL
// Sends the 'tabledata.html' file as a response
app.get('/getpage', (req, res) => {
  res.sendFile(path.resolve('pages/getpage.html'));
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

