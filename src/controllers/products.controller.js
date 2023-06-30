import Products from '../models/Product.js';
import { validaProduct } from './validation/validations.js';

class ProductController {
    static findProducts = async (req, res) => {
        const response = await Products.find();
        if (response.length > 0) {
            res.status(200).json(response);
        } else {
            res.status(404).send('Nenhum produto encontrado');
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
            await validaProduct(req.body);
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
            await validaProduct(req.body);
            try {
                await Products.findByIdAndUpdate({ _id: id }, req.body);
                res.status(200).send('Produto atualizado');
            } catch {
                res.status(404).send('Produto não encontrado');
            }
        } catch (err) {
            res.status(400).send({ errorMessage: err.message });
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
