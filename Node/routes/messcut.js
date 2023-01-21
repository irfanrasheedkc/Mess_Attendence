const { query } = require('express');
var express = require('express');
var router = express.Router();
mongodb://localhost:27017
/* GET users listing. */

var mongoose = require('./db');
const User = mongoose.model('messcuts', { name: String, usercode: Number, year: String });
router.get('/:id', function (req, res, next) {
    User.find({ usercode: req.params.id }, (err, users) => {
        console.log(req.params.id)
        if (err) console.log("error");;
        if (users.length == 1)
            res.json({messcut:"true"});
        else
        res.json({messcut:"flase"});
    });
});
module.exports = router;
