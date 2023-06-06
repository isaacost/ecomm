use('ecomm');

const nome = db.products.createIndex({ nome: 1 });
const preco = db.products.createIndex({ preco: 1 });
const categoria = db.products.createIndex({ categoria: 1 });

console.log(nome);
console.log(preco);
console.log(categoria);
