import express from 'express';
import isloggedIn from '../middlewares/isloggedIn.js'
import logoutUser from '../controllers/logout.js';
import productModal from '../models/product-model.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.render("index");
});


router.get('/shop', isloggedIn, async (req, res) => {
  try {
      // Fetch products from the database
      let products = await productModal.find();

      // Ensure products is always an array, even if the database returns no results
      if (!Array.isArray(products)) {
          products = [];
      }

      // Render the shop view with the products data
      res.render("shop", { products });
  } catch (error) {
      console.error("Error fetching products:", error);

      // Handle the error by rendering an error page or redirecting with a flash message
      res.status(500).send("Error fetching products");
  }
});

router.get('/logout',isloggedIn, logoutUser);

export default router;