var express = require('express');
var app = express();
var parseDate = require("./parseDate");

app.get("/:query", function (request, response) {

  var date = request.params.query;
  response.send(parseDate(date));

});




var listener = app.listen(3000, function () {

});

//*****for use with glitch*****
// var listener = app.listen(process.env.PORT, function () {
//
// });
