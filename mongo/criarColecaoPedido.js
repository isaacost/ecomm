use("ecomm");

db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["dataPedido", "account", "enderecoEntrega", "itens"],
      additionalProperties: false,
      properties: {
        _id: {
          description: "A unique identifier for an order",
          bsonType: "objectId",
        },
        dataPedido: {
          bsonType: "date",
          description: "Must be a date and is required",
        },
        account: {
          bsonType: "object",
          required: ["accountId", "nomeCliente"],
          additionalProperties: false,
          properties: {
            accountId: {
              bsonType: "objectId",
              description: "Must be a valid account ID and is required",
            },
            nomeCliente: {
              bsonType: "string",
              description: "Must be a string and is required",
            },
          },
        },
        enderecoEntrega: {
          bsonType: "object",
          required: ["bairro", "rua", "numero", "cep", "cidade", "uf"],
          additionalProperties: false,
          properties: {
            bairro: {
              bsonType: "string",
              minLength: 1,
              description: "Must be a string and is required",
            },
            rua: {
              bsonType: "string",
              minLength: 1,
              description: "Must be a string and is required",
            },
            numero: {
              bsonType: "string",
              minLength: 1,
              description: "Must be a string and is required",
            },
            complemento: {
              bsonType: "string",
              description: "Must be a string",
            },
            cep: {
              bsonType: "string",
              pattern: "^[0-9]{8}$",
              description: "Must be a string and is required",
            },
            cidade: {
              bsonType: "string",
              minLength: 5,
              description: "Must be a string and is required",
            },
            uf: {
              bsonType: "string",
              pattern: "[A-Z]{2}$",
              description: "Must be a string and is required",
            },
          },
        },
        itens: {
          bsonType: "array",
          minItems: 1,
          items: {
            bsonType: "object",
            required: ["productId", "quantidade", "precoUnitario"],
            additionalProperties: false,
            properties: {
              productId: {
                bsonType: "objectId",
                description: "Must be a valid product ID and is required",
              },
              quantidade: {
                bsonType: "int",
                minimum: 1,
                description: "Must be an integer greater than or equal to 1 and is required",
              },
              desconto: {
                bsonType: "number",
                minimum: 0,
                exclusiveMinimum: true,
                description: "Must be a number greater than 0",
              },
              precoUnitario: {
                bsonType: "number",
                minimum: 0,
                exclusiveMinimum: true,
                description: "Must be a number greater than 0 and is required",
              },
            },
          },
        },
      },
    },
  },
});
