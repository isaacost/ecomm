use('ecomm');

db.runCommand({
    collMod: 'accounts',
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: [
                'username',
                'email',
                'senha',
                'dataCriacao',
                'cpf',
                'telefone',
                'endereco',
            ],
            additionalProperties: false,
            properties: {
                _id: {
                    description: 'A unique identifier for an account',
                    bsonType: 'objectId',
                },
                username: {
                    bsonType: 'string',
                    minLength: 5,
                    description: 'Must be a string and is required',
                },
                email: {
                    bsonType: 'string',
                    pattern: '^\\w+([\\.-]?\\w+)@\\w+([\\.-]?\\w+)(\\.\\w{2,3})+$',
                    description: 'Must be a string and is required. Should be a valid email address.',
                },
                senha: {
                    bsonType: 'string',
                    minLength: 5,
                    description: 'Must be a string and is required',
                },
                dataCriacao: {
                    bsonType: 'date',
                    description: 'Must be a date and is required',
                },
                cpf: {
                    bsonType: 'string',
                    pattern: '^[0-9]{11}$',
                    description: 'Must be a string of exactly 11 digits and is required',
                },
                telefone: {
                    bsonType: 'string',
                    pattern: '^[0-9]{11}$',
                    description: 'Must be a string consisting of only digits and is required',
                },
                endereco: {
                    bsonType: 'object',
                    required: ['bairro', 'rua', 'numero', 'cep', 'cidade', 'uf'],
                    additionalProperties: false,
                    properties: {
                        bairro: {
                            bsonType: 'string',
                            minLength: 1,
                            description: 'Must be a string of at least 1 character and is required',
                        },
                        rua: {
                            bsonType: 'string',
                            minLength: 1,
                            description: 'Must be a string of at least 1 character and is required',
                        },
                        numero: {
                            bsonType: ['number', 'string'],
                            pattern: '^d{1}|[S/N]',
                            description: "Must be a number or a string representing 'S/N' and is required",
                        },
                        complemento: {
                            bsonType: 'string',
                            description: 'Must be a string',
                        },
                        cep: {
                            bsonType: 'string',
                            pattern: '^[0-9]{8}$',
                            description: 'Must be a string of exactly 8 digits and is required',
                        },
                        cidade: {
                            bsonType: 'string',
                            minLength: 5,
                            description: 'Must be a string of at least 5 characters and is required',
                        },
                        uf: {
                            bsonType: 'string',
                            enum: [
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
                            ],
                            description: 'Must be a valid UF (two uppercase letters) and is required',
                        },
                    },
                },
            },
        },
    },
    validationLevel: 'strict',
    validationAction: 'error',
});
