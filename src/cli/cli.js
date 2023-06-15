import CategoryService from './CategoryService.js';

const args = process.argv;

async function processarComando(argumentos) {
    const id = argumentos[3];
    const arquivo = argumentos[3];
    const atualiza = argumentos[4];
    const categoria = await CategoryService.readJSON(arquivo);
    const update = await CategoryService.readJSON(atualiza);
    switch (argumentos[2]) {
    case '--listarCategorias':
        await CategoryService.findCategories();
        break;
    case '--recuperarCategoriaPorId':
        await CategoryService.findCategoryById(id);
        break;
    case '--inserirCategoria':
        if (categoria === undefined) {
            break;
        } else {
            await CategoryService.createCategory(categoria);
            break;
        }
    case '--atualizarCategoria':
        if (update === undefined) {
            break;
        } else {
            await CategoryService.updateCategory(id, update);
            break;
        }
    case '--excluirCategoria':
        await CategoryService.deleteCategory(id);
        break;
    default:
        console.log(`${argumentos[2]} não encontrado`);
    }
}

await processarComando(args);
