import express from 'express';
import CategoryController from '../controllers/categories.controller.js';

const router = express.Router();

router
    .get('/api/categories', CategoryController.findCategorias)
    .post('/api/admin/categories', CategoryController.createCategoria);

export default router;
