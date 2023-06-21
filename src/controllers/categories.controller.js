import Categories from '../models/Category.js';

function validaCategoria(body) {
    if (body.nome.length < 3) {
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

    static findById = async (req, res) => {
        const { id } = req.params;
        try {
            const response = await Categories.find({ _id: id });
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
            res.status(201).send(categoria.toJSON());
        } catch (err) {
            res.status(400).send({ errorMessage: err.message });
        }
    };
}

export default CategoryController;
