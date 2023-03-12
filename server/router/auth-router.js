const express = require('express');
const router = express.Router();

const userController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const { body } = require('express-validator');

/**
 * * Регистрация
 */
router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  userController.registration
);
/**
 * * Отмена регистрации
 */
router.post('/cancelRegistration', userController.cancelRegistartion);
/**
 * * Авторизация
 */
router.post('/login', userController.login);
/**
 * * Выход
 */
router.post('/logout', userController.logout);
/**
 * * Активация пользователя по ссылке
 */
router.get('/activate/:link', userController.activate);
/**
 * * Обновление токенов
 */
router.get('/refresh', userController.refresh);

module.exports = router;
