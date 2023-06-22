import Categories from '../models/Category.js';

function validaCategoria(body) {
    const regex = /^(?![0-9])[a-zA-Z0-9]{3,}$/;
    if (!regex.test(body.nome)) {
        throw new Error('Invalid argument: nome');
    }
}

class CategoryController {
    static findCategorias = async (req, res) => {
        const response = await Categories.find();
        if (response.length > 0) {
            res.status(200).json(response);
        } else {
            res.status(404).send('Nenhuma categoria encontrada');
        }
    };

    static findCategoriaById = async (req, res) => {
        const { id } = req.params;
        try {
            const response = await Categories.findById({ _id: id });
            res.status(200).json(response);
        } catch {
            res.status(404).send('Nenhuma categoria encontrada');
        }
    };

    static createCategoria = async (req, res) => {
        try {
            validaCategoria(req.body);
            const categoria = new Categories(req.body);
            await categoria.save();
            res.status(201).json(categoria);
        } catch (err) {
            res.status(400).send({ errorMessage: err.message });
        }
    };

    static updateCategoria = async (req, res) => {
        const { id } = req.params;
        try {
            validaCategoria(req.body);
            try {
                await Categories.findByIdAndUpdate({ _id: id }, { nome: req.body.nome });
                res.status(200).send('Categoria atualizada');
            } catch {
                res.status(404).send('Categoria não encontrada');
            }
        } catch {
            res.status(400).send('Bad request');
        }
    };

    static deleteCategoria = async (req, res) => {
        const { id } = req.params;
        try {
            await Categories.findByIdAndDelete({ _id: id });
            res.status(200).send('Categoria removida');
        } catch {
            res.status(404).send('Categoria não encontrada');
        }
    };

    static activeCategoria = async (req, res) => {
        const { id } = req.params;
        try {
            await Categories.findByIdAndUpdate({ _id: id }, { status: 'ATIVA' });
            res.status(200).send('Categoria ativada');
        } catch {
            res.status(404).send('Categoria não encontrada');
        }
    };
}

export default CategoryController;
