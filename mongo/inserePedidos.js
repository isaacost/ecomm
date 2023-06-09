use("ecomm");

const result = db.orders.insertMany([
  {
    dataPedido: new Date(),
    account: {
      accountId: ObjectId("64833e7facc140e02aff7410"),
      nomeCliente: "John Doe",
    },
    enderecoEntrega: {
        bairro: "Centro",
        rua: "Rua Principal",
        numero: "123",
        complemento: "Apartment 4",
        cep: "12345678",
        cidade: "São Paulo",
        uf: "SP",
      },
    itens: [
      {
        productId: ObjectId("6478d4f1807caa6c1c34ff67"),
        quantidade: 2,
        precoUnitario: 9176.00,
      },
      {
        productId: ObjectId("6478d4f1807caa6c1c34ff68"),
        quantidade: 1,
        desconto: 89.50,
        precoUnitario: 1889.00,
      },
    ],
  },
  {
    dataPedido: new Date(),
    account: {
      accountId: ObjectId("64833b0c53e01686aa9d3014"),
      nomeCliente: "Jane Smith",
    },
    enderecoEntrega: {
        bairro: "Centro",
        rua: "Rua Principal",
        numero: "S/N",
        complemento: "",
        cep: "87654321",
        cidade: "Rio de Janeiro",
        uf: "RJ",
      },
    itens: [
      {
        productId: ObjectId("6478d4f1807caa6c1c34ff6c"),
        quantidade: 1,
        desconto: 179.00,
        precoUnitario: 8549.10,
      },
    ],
  },
]);
