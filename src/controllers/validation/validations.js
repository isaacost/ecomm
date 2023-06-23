import Categories from '../../models/Category.js';

function validaCategoria(body) {
    const regex = /^(?![0-9])[\p{L}\d\s]{3,}$/u;
    if (!regex.test(body.nome)) {
        throw new Error('Invalid argument: nome');
    }
}

async function validCategory(id) {
    try {
        await Categories.findById({ _id: id });
        return true;
    } catch {
        return false;
    }
}

async function validaProduct(body) {
    const regexNome = /^(?![0-9])[\p{L}\d\s]{3,}$/u;
    const regexSlug = /^[a-zA-Z0-9-]+$/;
    if (!regexNome.test(body.nome)) {
        throw new Error('Invalid argument: nome');
    }
    if (!regexSlug.test(body.slug)) {
        throw new Error('Invalid argument: slug só pode conter letras maiúsculas ou minúsculas, números e hífens');
    }
    if (body.preco <= 0) {
        throw new Error('Invalid argument: preço deve ser maior que zero');
    }
    if (body.estoque <= 0 || body.estoque >= 1000) {
        throw new Error('Invalid argument: quantidade em estoque deve estar entre 1 e 9999');
    }

    const id = body.categoria;
    const category = await validCategory(id);

    if (!category) {
        throw new Error('Invalid argumento: categoria não encontrada');
    }
}

export { validaCategoria, validaProduct };
