// This is how we add in node modules that we want to use in our application.
// Express is a web application framework, we are going to use it for our simple portfolio site.
var express = require('express');
var app = express();
var path = require('path');

// Telling the app to use the public folder to serve our files is a nice and clean way to manage our site assets
app.use(express.static(path.join(__dirname, 'public')));

// When the app is run we're going to listen on a port so we know when we have connections from clients
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});