var bodyParser = require("body-parser"),
mongoose = require("mongoose"),
express = require("express"),
app = express();

// App config
mongoose.connect("mongodb://localhost/restful_employee_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Mongoose/model  config
var employeeSchema = new mongoose.Schema({
	name: String,
	image: String,
	title: String,
	sex: String,
	StartDate: {type: Date, default: Date.now},
	OfficePhone: Number,
	cellPhone: Number,
	SMS: Number,
	Email: String,
	Manager: String,
	DirectReport: Array
})

var employee = mongoose.model("employee", employeeSchema);


// RESTful Routes


app.listen(5000, function() {
	console.log("Start Server");
});
