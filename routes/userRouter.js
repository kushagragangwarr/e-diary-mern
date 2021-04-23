const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const auth = require('../middlewares/auth');

// Register User
router.post('/register', userCtrl.registerUser);

// Login a User
router.post('/login', userCtrl.loginUser);

// Verify User
router.get('/verify', userCtrl.verifiedUser);

module.exports = router;