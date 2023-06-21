import express from 'express';
import CategoryController from '../controllers/categories.controller.js';

const router = express.Router();

router
    .get('/api/categories', CategoryController.findCategorias)
    .get('/api/categories/:id', CategoryController.findById)
    .post('/api/admin/categories', CategoryController.createCategoria);

export default router;
