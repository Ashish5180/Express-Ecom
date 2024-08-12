import express from 'express';
import upload from '../config/multer-config.js';
import { name } from 'ejs';
import productModal from '../models/product-model.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('product Route');
});

router.post('/create', upload.single('image'), async (req, res) => {
  try{let { name ,price ,discount ,bgcolor ,panelcolor ,textcolor} = req.body;

  let product = await productModal.create({
    image:req.file.buffer,
     name ,
     price ,
     discount ,
     bgcolor ,
     panelcolor ,
     textcolor
  })
  req.flash("success", "product created successfully")
  res.redirect('/owners/admin');}
  catch(err){
    res.send(err.message);
  }

});

export default router;