import {
    describe, expect, it, jest,
} from '@jest/globals';
import Products from '../../models/Product.js';
import ProductController from '../../controllers/products.controller.js';

describe('GET em /api/products/ quando nada está cadastrado', () => {
    const request = {};
    const response = {};
    it('Deve retornar 404 se não houverem produtos', async () => {
        response.status = jest.fn().mockReturnValue(response);
        response.send = jest.fn().mockReturnValue(response);

        jest.spyOn(Products, 'find').mockResolvedValue([]);
        await ProductController.findProducts(request, response);
        expect(response.status).toHaveBeenCalledWith(404);
    });
});
