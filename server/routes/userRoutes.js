const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Маршрут для регистрации нового пользователя
router.post('/signup', UserController.signup);

// Маршрут для аутентификации пользователя
router.post('/login', UserController.login);

// Маршрут для обновления данных пользователя
router.put('/update', UserController.updateUserData);

// Маршрут для удаления изображения пользователя
router.delete('/delete-image', UserController.deleteImage);

// Маршрут для обновления изображения пользователя
router.put('/update-image', UserController.updateImage);

// Маршрут для смены пароля пользователя
router.put('/change-password', UserController.changePassword);

// Маршрут для получения информации о пользователе по его ID
router.get('/:userId', UserController.getUserById);

module.exports = router;
