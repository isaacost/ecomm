import express from 'express';
import categories from './categories.routes.js';
import products from './products.routes.js';
import accounts from './accounts.routes.js';
import orders from './orders.routes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: 'Curso Alura - LevelUp PagoNxt turma 3' });
    });

    app.use(
        express.json(),
        categories,
        products,
        accounts,
        orders,
    );
};

export default routes;
