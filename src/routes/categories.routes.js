import express from 'express';
import CategoryController from '../controllers/categories.controller.js';

const router = express.Router();

router
    .get('/api/categories', CategoryController.findCategorias);

export default router;
