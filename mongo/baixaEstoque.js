use('ecomm');

const result = db.products.updateOne(
    {nome: 'Galaxy Tab S8'},
    {$min: {estoque: 2}}
);

console.log(result);