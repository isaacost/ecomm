import express from 'express';
import CategoryController from '../controllers/categories.controller.js';

const router = express.Router();

router
    .get('/api/categories', CategoryController.findCategorias)
    .get('/api/categories/:id', CategoryController.findCategoriaById)
    .post('/api/admin/categories', CategoryController.createCategoria)
    .put('/api/admin/categories/update/:id', CategoryController.updateCategoria)
    .put('/api/admin/categories/active/:id', CategoryController.activeCategoria)
    .delete('/api/admin/categories/remove/:id', CategoryController.deleteCategoria);

export default router;
