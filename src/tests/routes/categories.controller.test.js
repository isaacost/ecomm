import {
    describe, expect, it, jest,
} from '@jest/globals';
import Category from '../../models/Category';
import CategoryController from '../../controllers/categories.controller';

describe('GET em /api/categories/ quando nada está cadastrado', () => {
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
