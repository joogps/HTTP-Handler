const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

let port = process.env.PORT || 8080;
app.listen(port);

app.get('/', function(req, res) {
	console.log(req.query.val1, req.query.val2, req.query.val2)
});