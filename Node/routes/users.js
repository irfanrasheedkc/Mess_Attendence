const { query } = require('express');
var express = require('express');
var router = express.Router();
mongodb://localhost:27017
/* GET users listing. */

var mongoose = require('./db');
const User = mongoose.model('users', { name: String, usercode: Number, year: String });
router.get('/:id', function (req, res, next) {
  User.find({ usercode: req.params.id }, (err, users) => {
    if (err) console.log("error");;
    if (users.length == 0)
    res.json({name:"not found",usercode:"not found"});
    else
    res.send(users[0]);
  });
});
module.exports = router;
