var morgan = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');
var swig = require('swig');
var models = require ('./models');
var wiki = require('./route/wiki')

var User = models.User;
var Page = models.Page;

var isForce = function () {
	return false;
}
User.sync({force:isForce()})
	.then(function () {
		Page.sync({force:isForce()})
	})
	.catch(function(err){
		console.error(err);
	});

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({cache:false});

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/', function(req,res) {
	res.render('index.html');
})
app.use('/wiki', wiki);


app.listen(3000);
console.log('Magic happens on port 3000!');
