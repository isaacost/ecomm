import {
    describe, expect, it, jest,
} from '@jest/globals';
import Category from '../../models/Category.js';
import CategoryController from '../../controllers/categories.controller.js';

describe('GET em /api/admin/users/ quando nada está cadastrado', () => {
    const request = {};
    const response = {};
    it('Deve retornar 404 se não houverem categorias', async () => {
        response.status = jest.fn().mockReturnValue(response);
        response.send = jest.fn().mockReturnValue(response);

        jest.spyOn(Category, 'find').mockResolvedValue([]);
        await CategoryController.findCategorias(request, response);
        expect(response.status).toHaveBeenCalledWith(404);
    });
});
