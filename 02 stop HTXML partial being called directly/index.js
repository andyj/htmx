// Import the required modules
const { isHTMX } = require('./middleware/is_htmx.js');
const express    = require('express');
const path       = require('path');

// Initialise the express application
const app = express();

// Declare the port number
const port = 3010;

// Serve static files from the '../static' directory
app.use(express.static('../static'));

// Middleware to check if HTMX request
app.use(isHTMX);

// Route for the root URL ('/')
// Sends the 'index.html' file as a response
app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

// Route for '/tabledata' URL
// Sends the 'tabledata.html' file as a response
app.get('/getpage', (req, res) => {
  if (!res.locals.isHTMX) {
    res.send("Invalid route");
  } else {
    res.sendFile(path.resolve('pages/getpage.html'));
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

