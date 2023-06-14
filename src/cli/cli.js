import CategoryService from './CategoryService.js';

const args = process.argv;

async function processarComando(argumentos){
    switch(argumentos[2]) {
        case '--listarCategorias':
            await CategoryService.findCategories();
            break;
        case '--recuperarCategoriaPorId':
            const id = argumentos[3]
            await CategoryService.findCategoryById(id);
            break;
        case '--inserirCategoria':
            const arquivo = argumentos[3]
            const categoria = await CategoryService.readJSON(arquivo)
            if (categoria === undefined){
                break;
            } else{
            await CategoryService.createCategory(categoria)
            break;
            }
        default:
            console.log(`${argumentos[2]} não encontrado`)
    }
}

await processarComando(args);