import CategoryService from "./CategoryService.js";

const args = process.argv;

async function processarComando(argumentos){
    switch(argumentos[2]) {
        case '--listarCategorias':
            await CategoryService.findCategories();
            break;
        case '--test':
            console.log('Apenas um teste');
            break;
        default:
            console.log(`${argumentos[2]} não encontrado`)
    }
}

processarComando(args);