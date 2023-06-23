import {
    describe, expect, it, jest,
} from '@jest/globals';
import Account from '../../models/Account.js';
import AccountController from '../../controllers/accounts.controller.js';

describe('GET em /api/categories/ quando nada está cadastrado', () => {
    const request = {};
    const response = {};
    it('Deve retornar 404 se não houverem usuários', async () => {
        response.status = jest.fn().mockReturnValue(response);
        response.send = jest.fn().mockReturnValue(response);

        jest.spyOn(Account, 'find').mockResolvedValue([]);
        await AccountController.findUsers(request, response);
        expect(response.status).toHaveBeenCalledWith(404);
    });
});
