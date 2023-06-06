use("ecomm");

const result = db.orders.insertMany([
  {
    dataPedido: new Date(),
    account: {
      accountId: ObjectId("647f8fa6839459d34a862e84"),
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
        productId: ObjectId("6478d4f1807caa6c1c34ff63"),
        quantidade: 1,
        precoUnitario: 3523.00,
      },
      {
        productId: ObjectId("6478d4f1807caa6c1c34ff64"),
        quantidade: 1,
        desconto: 2.50,
        precoUnitario: 2500.00,
      },
    ],
  },
  {
    dataPedido: new Date(),
    account: {
      accountId: ObjectId("647f8fa6839459d34a862e85"),
      nomeCliente: "Jane Smith",
    },
    enderecoEntrega: {
        bairro: "Vila Nova",
        rua: "Rua Secundária",
        numero: "456",
        complemento: "",
        cep: "23456789",
        cidade: "Rio de Janeiro",
        uf: "RJ",
      },
    itens: [
      {
        productId: ObjectId("6478d4f1807caa6c1c34ff67"),
        quantidade: 1,
        desconto: 176.00,
        precoUnitario: 9176.00,
      },
    ],
  },
]);
