var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const n = Math.floor(Math.random() * 100 + 1);
    res.render('lucky', { title: 'Lucky Number', number: n });
});

router.get('/sayhi', function(req, res, next) {
    res.send('Hej hej');
});

module.exports = router;