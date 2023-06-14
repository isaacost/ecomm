use("ecomm");

db.accounts.insertMany([
  {
    username: "john.doe",
    email: "john.doe@example.com",
    senha: "password123",
    dataCriacao: new Date(),
    cpf: "12345678901",
    telefone: "12345678901",
    endereco: {
      bairro: "Centro",
      rua: "Rua Principal",
      numero: 123,
      complemento: "Apartment 4",
      cep: "12345678",
      cidade: "São Paulo",
      uf: "SP"
    }
  },
  {
    username: "jane.smith",
    email: "jane.smith@example.com",
    senha: "password456",
    dataCriacao: new Date(),
    cpf: "98765432109",
    telefone: "98765432109",
    endereco: {
      bairro: "Centro",
      rua: "Rua Principal",
      numero: "S/N",
      complemento: "",
      cep: "87654321",
      cidade: "Rio de Janeiro",
      uf: "RJ"
    }
  }
]);
