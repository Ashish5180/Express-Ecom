import express from 'express';
import ownerModal from '../models/owner-model.js';
const router = express.Router();

// $env:NODE_ENV="development"


router.get('/', (req, res) => {
  res.send('Owners Route');
});

if (process.env.NODE_ENV === 'development') {
  router.post('/create', async (req, res) => {
    try {
      let Owner = await ownerModal.findOne();
      if (Owner) {
        return res.send(`Owner already exists || You don't have permission to create another owner` );
      }
  
      let {  fullname, email, password } = req.body;
  
      let createdOwner = await ownerModal.create({
        fullname,
        email,
        password
      });
  
      res.send(createdOwner);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
}

router.get('/admin', (req, res) => {
  res.render('createproducts');
});




export default router;
