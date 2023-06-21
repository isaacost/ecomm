import express from 'express';
import categories from './categories.routes.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: 'Curso Alura - LevelUp PagoNxt turma 3' });
    });

    app.use(
        express.json(),
        categories,
    );
};

export default routes;
