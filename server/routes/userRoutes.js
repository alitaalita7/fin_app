const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.post('/update-user-data', UserController.updateUserData);
router.post('/add-completed-goal', UserController.addCompletedGoal);
router.post('/set-selected-goal', UserController.setSelectedGoal);
router.post('/add-completed-achievement', UserController.addCompletedAchievement);
router.post('/accept-user-answer', UserController.acceptUserAnswer);

// Маршрут для получения информации о пользователе по его ID
router.get('/:userId', UserController.getUserById);



module.exports = router;

