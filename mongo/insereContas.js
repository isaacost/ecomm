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
        "username": "Alhe",
        "email": "alhe@email.com",
        "senha": "def456",
        "dataCriacao": criationDate,
        "cpf": "65165486680",
        "telefone": "9993162616",
        "endereco": {
            "bairro": "Centro",
            "rua": "Avenida Doutor Manuel Teles",
            "numero": "1234",
            "complemento": "apartamento 703",
            "cep": "25010090",
            "cidade": "Duque de Caxias",
            "uf": "RJ"
        },    
    },
    {
        "username": "Gyali",
        "email": "gyali@email.com",
        "senha": "ghi789",
        "dataCriacao": criationDate,
        "cpf": "84285290863",
        "telefone": "9984259831",
        "endereco": {
            "bairro": "Jardim Industrial",
            "rua": "Rua Goiânia",
            "numero": "754",
            "complemento": "apartamento 1301",
            "cep": "32230550",
            "cidade": "Contagem",
            "uf": "MG"
        },
    }, 
]);

console.log(result);
