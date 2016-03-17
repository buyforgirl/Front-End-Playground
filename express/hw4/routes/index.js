var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var mysql =  require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 var connection =  mysql.createConnection({
  	host : '127.0.0.1',
  	user : 'root',
  	password: 'root',
	database: 'express'
 });

connection.connect();

/* GET home page. */
router.route('/users')
.get(function(req, res, next) {
  var strQuery = 'select * from users';
  var users = [];
  connection.query(strQuery, function(err, rows, fields) {
  		if (err) throw err;
  		res.json({ 'users': rows});
  }); 
})
.post(function(req, res) {
	var strQuery = 'insert into users set ?';
	connection.query(strQuery, req.body, function(err, result) {
		if (err) throw err;
		res.json({message: 'user created'});
	})
	
});

router.route('/users/:id')
.get(function(req, res) {
	var id = parseInt(req.params.id);
	var strQuery = 'select * from users where id = ?';
	connection.query(strQuery, id, function(err, rows, fields) {
  		if (err) throw err;
  		if (rows.length != 0) {
  			res.json(rows[0]);
  		} else {
  			res.json({message: 'there is no this user id'});
  		}	
  	})	
})
.put(function(req, res) {
	var id = parseInt(req.params.id);
	var strQuery = 'update users set ? where id = ?';
	connection.query(strQuery, [req.body, id], function(err, result) {
		if (err) {
			res.json({message: 'user deleted!'});
		} else {
			res.json({message: 'user id update'});
		}

	})
})
.delete(function(req, res) {
	var id = parseInt(req.params.id);
	var strQuery = 'delete from users where id = ?';
	connection.query(strQuery, id, function(err, result) {
		if (err) throw err;
		if (result.affectedRows !== 0) {
			res.json({message: 'user deleted!'});
		} else {
			res.json({message: 'there is no this user id'});
		}
	})
	
})


module.exports = router;

