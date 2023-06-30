import express from 'express';
import ProductController from '../controllers/products.controller.js';

const router = express.Router();

router
    .get('/api/products', ProductController.findProducts)
    .get('/api/products/:id', ProductController.findProductById)
    .post('/api/admin/products', ProductController.createProduct)
    .put('/api/admin/products/update/:id', ProductController.updateProduct)
    .delete('/api/admin/products/remove/:id', ProductController.deleteProduct);

export default router;
