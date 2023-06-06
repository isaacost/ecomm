use('ecomm');

let criationDate = new Date();

const result = db.accounts.insertMany([
    {
        "username": "Fihie",
        "email": "fihie@email.com",
        "senha": "abc123",
        "dataCriacao": criationDate,
        "cpf": "03752352302",
        "telefone": "9991256514",
        "endereco": {
            "bairro": "Jardim Guaiuba",
            "rua": "Avenida Humberto Pietro Peres",
            "numero": "56",
            "complemento": "apartamento 23",
            "cep": "11421200",
            "cidade": "Guarujá",
            "uf": "SP"
        },
    },
    {
        "username": "Fihie2",
        "email": "fihie2@email.com",
        "senha": "abc123",
        "dataCriacao": criationDate,
        "cpf": "03752352301",
        "telefone": "9991256515",
        "endereco": {
            "bairro": "Jardim Guaiuba",
            "rua": "Avenida Humberto Pietro Peres",
            "numero": "56",
            "complemento": "apartamento 20",
            "cep": "11421200",
            "cidade": "Guarujá",
            "uf": "SP"
        },
    },
    {
        "username": "Fihie3",
        "email": "fihie3@email.com",
        "senha": "abc123",
        "dataCriacao": criationDate,
        "cpf": "03752352303",
        "telefone": "9991256589",
        "endereco": {
            "bairro": "Jardim Guaiuba",
            "rua": "Avenida Humberto Pietro Peres",
            "numero": "56",
            "complemento": "apartamento 29",
            "cep": "11421200",
            "cidade": "Guarujá",
            "uf": "SP"
        },
    }
]);

console.log(result);
