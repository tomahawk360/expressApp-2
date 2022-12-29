const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

//Obtener user de db
router.get('/:u_name&:u_pwd', user_controller.get_user);

module.exports = router;