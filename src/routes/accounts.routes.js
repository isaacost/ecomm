import express from 'express';
import AccountController from '../controllers/accounts.controller.js';

const router = express.Router();

router
    .get('/api/admin/users', AccountController.findUsers)
    .get('/api/users/:id', AccountController.findUserById)
    .post('/api/admin/users', AccountController.createUser)
    .put('/api/admin/users/update/:id', AccountController.updateUser)
    .delete('/api/admin/users/remove/:id', AccountController.deleteUser);

export default router;
