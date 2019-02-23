let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET user page. */
router.get('/user', indexController.displayUserPage);

module.exports = router;
