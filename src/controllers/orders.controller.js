import Orders from '../models/Order.js';
import { validaPedido } from './validation/validations.js';

class OrderController {
    static findOrderById = async (req, res) => {
        const { id } = req.params;
        try {
            const response = await Orders.findById({ _id: id });
            res.status(200).json(response);
        } catch {
            res.status(404).send('Nenhum pedido encontrado');
        }
    };

    static createOrder = async (req, res) => {
        try {
            await validaPedido(req.body);
            const pedido = new Orders(req.body);
            await pedido.save();
            res.status(201).json(pedido);
        } catch (err) {
            res.status(400).send({ errorMessage: err.message });
        }
    };
}

export default OrderController;
