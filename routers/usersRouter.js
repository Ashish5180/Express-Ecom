import express from 'express';

import cookieParser from 'cookie-parser';
import loginUser from '../controllers/loginController.js';
import registerUser from '../controllers/authController.js';

const router = express.Router();
router.use(cookieParser());

router.get('/', (req, res) => {
  res.send('Users Route');
});

router.post('/register', registerUser);
router.post('/login', loginUser);


export default router;
