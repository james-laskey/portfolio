const express = require("express")
var React = require('react')
var ReactDOM = require('react-dom');
var bodyParser = require('body-parser')
const AWS = require('aws-sdk')
var sha256 = require('js-sha256');
let  app = express();
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false, parameterLimit: 50000 }))
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static('src/js/'));
const PORT = process.env.PORT || 3000
var server = app.listen(PORT || 3000, function() {
  console.log("listening on port number %d", server.address().port);
});
app.get('/', (req, res) => res.sendFile(__dirname+"/src/index.html"));