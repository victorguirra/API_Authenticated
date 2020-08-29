const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

router.get('/', ProductController.allProducts);
router.get('/:id', ProductController.singleProduct);   
router.post('/', ProductController.newProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;    