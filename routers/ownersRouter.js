// routers/ownersRouter.js
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Owners Route');
});

export default router;
