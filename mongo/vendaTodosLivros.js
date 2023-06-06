use('ecomm');

const result = db.products.updateMany({categoria: "LIVROS"}, {$set: {estoque: 0}});

console.log(result);