import Accounts from '../models/Account.js';
import { validaAccount } from './validation/validations.js';

class AccountController {
    static findUsers = async (req, res) => {
        const response = await Accounts.find();
        if (response.length > 0) {
            res.status(200).json(response);
        } else {
            res.status(404).send('Nenhum usuário encontrado');
        }
    };

    static findUserById = async (req, res) => {
        const { id } = req.params;
        try {
            const response = await Accounts.findById({ _id: id });
            console.log(response);
            res.status(200).json(response);
        } catch {
            res.status(404).send('Nenhum usuário encontrado');
        }
    };

    static createUser = async (req, res) => {
        try {
            validaAccount(req.body);
            const conta = new Accounts(req.body);
            await conta.save();
            res.status(201).json(conta);
        } catch (err) {
            res.status(400).send({ errorMessage: err.message });
        }
    };

    static updateUser = async (req, res) => {
        const { id } = req.params;
        try {
            validaAccount(req.body);
            try {
                await Accounts.findByIdAndUpdate({ _id: id }, req.body);
                res.status(200).send('Usuário atualizado');
            } catch {
                res.status(404).send('Usuário não encontrado');
            }
        } catch (err) {
            res.status(400).send({ errorMessage: err.message });
        }
    };

    static deleteUser = async (req, res) => {
        const { id } = req.params;
        try {
            await Accounts.findByIdAndDelete({ _id: id });
            res.status(200).send('Usuário removido');
        } catch {
            res.status(404).send('Usuário não encontrado');
        }
    };
}

export default AccountController;
