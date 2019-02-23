let express = require('express');
let router = express.Router();

let passport = require('passport');

let userController = require('../controllers/c_user');


/* GET Contact List page - READ Operation */
router.get('/', userController.displayUserList);

/* GET Route for the Add page 
   this will display the Add page */
router.get('/add', userController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add', userController.processAddPage);

/* GET request - display the Edit page */
router.get('/edit/:id', userController.displayEditPage);

/* POST request - Update the database with data from the Edit Page */
router.post('/edit/:id', userController.processEditPage);

/* GET request to perform the delete action */
router.get('/delete/:id', userController.performDelete);

module.exports = router;