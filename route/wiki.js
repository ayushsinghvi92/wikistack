var express = require('express');
var router = express.Router();

router.get('/', function (req, res){
	res.redirect('/');
});

router.post('/', function (req, res){
	res.send('hello, again.');
});

router.get('/add', function (req, res){
	res.render('addpage.html');
});

module.exports = router;
