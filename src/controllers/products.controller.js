import mongoose from 'mongoose';
import Products from '../models/Product.js';
import Categories from '../models/Category.js';

async function validCategory(id) {
    const category = await Categories.findById({ _id: id });
    return (category === null);
}

async function validProduct(body) {
    if (body.nome.length < 3) {
        throw new Error('Invalid argument: nome');
    }
    if (body.preco <= 0) {
        throw new Error('Invalid argument: preço deve ser maior que zero');
    }
    if (body.estoque <= 0 || body.estoque >= 1000) {
        throw new Error('Invalid argument: quantidade em estoque deve estar entre 1 e 9999');
    }

    const id = new mongoose.Types.ObjectId(body.categoria.id);
    const category = await validCategory(id);

    if (!category) {
        throw new Error('Invalid argumento: categoria não encontrada');
    }
}

class ProductController {
    static findProducts = async (req, res) => {
        const response = await Products.find();
        if (response.length > 0) {
            res.status(200).json(response);
        } else {
            res.status(404).send('Nenhuma categoria encontrada');
        }
    };

    static findProductById = async (req, res) => {
        const { id } = req.params;
        try {
            const response = await Products.findById({ _id: id });
            res.status(200).json(response);
        } catch {
            res.status(404).send('Nenhum produto encontrado');
        }
    };

    static createProduct = async (req, res) => {
        try {
            validProduct(req.body);
            const produto = new Products(req.body);
            await produto.save();
            res.status(201).json(produto);
        } catch (err) {
            res.status(400).send({ errorMessage: err.message });
        }
    };

    static updateProduct = async (req, res) => {
        const { id } = req.params;
        try {
            validProduct(req.body);
            try {
                await Products.findByIdAndUpdate({ _id: id }, req.body);
                res.status(200).send('Produto atualizado');
            } catch {
                res.status(404).send('Produto não encontrado');
            }
        } catch {
            res.status(400).send('Bad request');
        }
    };

    static deleteProduct = async (req, res) => {
        const { id } = req.params;
        try {
            await Products.findByIdAndDelete({ _id: id });
            res.status(200).send('Produto removido');
        } catch {
            res.status(404).send('Produto não encontrado');
        }
    };
}

export default ProductController;
