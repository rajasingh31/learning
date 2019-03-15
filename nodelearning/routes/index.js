var express = require('express');
var bodyParser=require('body-parser');
var router = express.Router();
var app = express();

var authenticateController=require('./../controllers/authenticate-controller');
var registerController=require('./../controllers/register-controller');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name:'Learning Factory' });
});

module.exports = router;

