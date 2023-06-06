use("ecomm");

db.createCollection("accounts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "username",
        "email",
        "senha",
        "dataCriacao",
        "cpf",
        "telefone",
        "endereco",
      ],
      additionalProperties: false,
      properties: {
        _id: {
            description: "A unique identifier for an categorie",
            bsonType: "objectId",   
         },
        username: {
          bsonType: "string",
          minLength: 5,
          description: "must be a string and is required",
        },
        email: {
          bsonType: "string",
          minLength: 5,
          description: "must be a string and is required",
        },
        senha: {
          bsonType: "string",
          minLength: 5,
          description: "must be a string and is required",
        },
        dataCriacao: {
          bsonType: "date",
          description: "must be a date and is required",
        },
        cpf: {
          bsonType: "string",
          pattern: "^[0-9]{11}$",
          description: "must be a string and is required",
        },
        telefone: {
          bsonType: "string",
          minLength: 10,
          description: "must be a string and is required",
        },
        endereco: {
          bsonType: "object",
          required: ["bairro", "rua", "numero", "cep", "cidade", "uf"],
          additionalProperties: false,
          properties: {
            bairro: {
              bsonType: "string",
              minLength: 1,
              description: "must be a string and is required",
            },
            rua: {
              bsonType: "string",
              minLength: 1,
              description: "must be a string and is required",
            },
            numero: {
              bsonType: "string",
              minLength: 1,
              description: "must be a string and is required",
            },
            complemento: {
              bsonType: "string",
              description: "must be a string",
            },
            cep: {
              bsonType: "string",
              pattern: "^[0-9]{8}$",
              description: "must be a string and is required",
            },
            cidade: {
              bsonType: "string",
              minLength: 5,
              description: "must be a string and is required",
            },
            uf: {
              bsonType: "string",
              pattern: "[A-Z]{2}$",
              description: "must be a string and is required",
            },
          },
        },
      },
    },
  },
});
