import express from 'express';
import OrderController from '../controllers/orders.controller.js';

const router = express.Router();

router
    .get('/api/orders/:id', OrderController.findOrderById)
    .post('/api/orders', OrderController.createOrder);

export default router;
