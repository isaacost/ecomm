import categories from '../models/Category.js';

class CategoryController {
    static findCategorias = async (req, res) => {
        const response = await categories.find();
        res.status(200).json(response);
    };
}

export default CategoryController;
