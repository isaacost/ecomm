import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        descricao: { type: String },
        slug: { tybe: String },
        preco: { tybe: Number },
        estoque: { type: Number },
        categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true },
    },
    {
        versionKey: false,
    },
);

const Products = mongoose.model('products', productSchema);

export default Products;
