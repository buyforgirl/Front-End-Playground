var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var users = [
{id:1, fName:'Hege', lName:"Pege", title:'student', sex:'male', age:'20'},
{id:2, fName:'Kim',  lName:"Pim", title:'teacher', sex:'female', age:'30'},
{id:3, fName:'Sal',  lName:"Smith", title:'software engineer', sex:'male', age:'25'},
{id:4, fName:'Jack', lName:"Jones", title:'nurse', sex:'female', age:'26'},
{id:5, fName:'John', lName:"Doe", title:'worker', sex:'male', age:'22'},
{id:6, fName:'Peter',lName:"Pan", title:'driver', sex:'male', age:'23'},
{id:7, fName:'Aege', lName:"Pege", title:'student', sex:'male', age:'20'},
{id:8, fName:'Kkim',  lName:"Pim", title:'teacher', sex:'female', age:'30'},
{id:9, fName:'Saal',  lName:"Smith", title:'software engineer', sex:'male', age:'25'},
{id:10, fName:'Sck', lName:"Jones", title:'nurse', sex:'female', age:'26'},
{id:11, fName:'Oohn', lName:"Doe", title:'worker', sex:'male', age:'22'},
{id:12, fName:'Qeter',lName:"Pan", title:'driver', sex:'male', age:'23'}
];

/* GET home page. */
router.route('/users')
.get(function(req, res, next) {
  res.json({ 'users': users});
})
.post(function(req, res) {
	var len = users.length;
	var id = users[len - 1].id + 1;
	users.push({});
	users[len].id = id;
 	users[len].fName = req.body.fName;
	users[len].lName = req.body.lName;
	users[len].title = req.body.title;
	users[len].sex = req.body.sex;
	users[len].age = req.body.age;
	res.json({message: 'user id create'});
});

router.route('/users/:id')
.get(function(req, res) {
	var user = {};
	var id = parseInt(req.params.id);
	for (var i = 0; i < users.length; i++) {
		if (id === users[i].id) {
			res.json(users[i]);
			return;
		}
	}
	res.json({message: 'there is no this user id'});
})
.put(function(req, res) {
	console.log(req.body);
	var id = parseInt(req.params.id);
	for (var i = 0; i < users.length; i++) {
		if (id === users[i].id) {
			users[i].fName = req.body.fName;
			users[i].lName = req.body.lName;
			users[i].title = req.body.title;
			users[i].sex = req.body.sex;
			users[i].age = req.body.age;
			res.json({message: 'user id update'});
			return;
		}
	}
	res.json({message: 'there is no this user id'});
})
.delete(function(req, res) {
	var id = parseInt(req.params.id);
	for (var i = 0; i < users.length; i++) {
		if (id === users[i].id) {
			users.splice(i, 1);
			res.json({message: 'user deleted!'});
			return;
		}
	}
	res.json({message: 'there is no this user id'});
})
module.exports = router;
