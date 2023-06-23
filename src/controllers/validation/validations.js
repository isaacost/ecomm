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

function validaAccount(body) {
    const regexNome = /^(?![0-9])[\p{L}\d\s]{5,}$/u;
    const regexEmail = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/;
    const regexCpfECel = /^[0-9]{11}$/;
    const regexNum = /^\d|S\/N$/i;
    const regexCep = /^[0-9]{8}$/;
    const uf = [
        'AC',
        'AL',
        'AM',
        'AP',
        'BA',
        'CE',
        'DF',
        'ES',
        'GO',
        'MA',
        'MG',
        'MS',
        'MT',
        'PA',
        'PB',
        'PE',
        'PI',
        'PR',
        'RJ',
        'RN',
        'RO',
        'RR',
        'RS',
        'SC',
        'SE',
        'SP',
        'TO',
    ];
    if (!regexNome.test(body.username)) {
        throw new Error('Invalid argument: username');
    }
    if (!regexEmail.test(body.email)) {
        throw new Error('Invalid argument: email');
    }
    if (body.senha.length < 5) {
        throw new Error('Invalid argument: senha');
    }
    if (!regexCpfECel.test(body.cpf)) {
        throw new Error('Invalid argument: cpf');
    }
    if (!regexCpfECel.test(body.telefone)) {
        throw new Error('Invalid argument: telefone');
    }
    if (body.endereco.bairro.length < 1) {
        throw new Error('Invalid argument: bairro');
    }
    if (body.endereco.rua.length < 1) {
        throw new Error('Invalid argument: rua');
    }
    if (!regexNum.test(body.endereco.numero)) {
        throw new Error('Invalid argument: numero');
    }
    if (!regexCep.test(body.endereco.cep)) {
        throw new Error('Invalid argument: cep');
    }
    if (body.endereco.cidade.length < 5) {
        throw new Error('Invalid argument: cidade');
    }
    if (!uf.includes(body.endereco.uf)) {
        throw new Error('Invalid argument: uf');
    }
}

export { validaCategoria, validaProduct, validaAccount };
