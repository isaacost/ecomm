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
          description: "A unique identifier for an account",
          bsonType: "objectId",
        },
        username: {
          bsonType: "string",
          minLength: 5,
          description: "Must be a string and is required",
        },
        email: {
          bsonType: "string",
          minLength: 5,
          description: "Must be a string and is required",
        },
        senha: {
          bsonType: "string",
          minLength: 5,
          description: "Must be a string and is required",
        },
        dataCriacao: {
          bsonType: "date",
          description: "Must be a date and is required",
        },
        cpf: {
          bsonType: "string",
          pattern: "^[0-9]{11}$",
          description: "Must be a string of exactly 11 digits and is required",
        },
        telefone: {
          bsonType: "string",
          minLength: 10,
          description: "Must be a string and is required",
        },
        endereco: {
          bsonType: "object",
          required: ["bairro", "rua", "numero", "cep", "cidade", "uf"],
          additionalProperties: false,
          properties: {
            bairro: {
              bsonType: "string",
              minLength: 1,
              description: "Must be a string of at least 1 character and is required",
            },
            rua: {
              bsonType: "string",
              minLength: 1,
              description: "Must be a string of at least 1 character and is required",
            },
            numero: {
              bsonType: "string",
              minLength: 1,
              description: "Must be a string of at least 1 character and is required",
            },
            complemento: {
              bsonType: "string",
              description: "Must be a string",
            },
            cep: {
              bsonType: "string",
              pattern: "^[0-9]{8}$",
              description: "Must be a string of exactly 8 digits and is required",
            },
            cidade: {
              bsonType: "string",
              minLength: 5,
              description: "Must be a string of at least 5 characters and is required",
            },
            uf: {
              bsonType: "string",
              pattern: "^[A-Z]{2}$",
              description: "Must be a string of exactly 2 uppercase letters and is required",
            },
          },
        },
      },
    },
  },
});
