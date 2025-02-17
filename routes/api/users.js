const express = require('express');
const { users: ctrl } = require('../../controllers');
const { authenticate, uploadAvatar } = require('../../middlewares');

const router = express.Router();

router.post('/signup', express.json(), ctrl.signup);

router.post('/login', express.json(), ctrl.login);

router.get('/logout', authenticate, ctrl.logout);

router.get('/current', express.json(), authenticate, ctrl.getCurrentUser);

router.patch('/', express.json(), authenticate, ctrl.updateUser);

router.patch('/avatars', authenticate, uploadAvatar.single('avatar'), ctrl.updateAvatar);

router.get('/verify/:verificationToken', ctrl.verify);

router.post('/verify/', ctrl.repeatVerify);

module.exports = router;
