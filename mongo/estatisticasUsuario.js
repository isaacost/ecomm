use('ecomm');

const user = db.accounts.findOne({ username: 'jane.smith' });

const result = db.orders.aggregate([
    {
        $match: {
            'account.accountId': user._id,
        },
    },
    {
        $unwind: '$itens',
    },
    {
        $group: {
            _id: '$_id',
            quantidades: { $sum: '$itens.quantidade' },
            totalPedidos: {
                $sum: {
                    $multiply: [
                        '$itens.precoUnitario',
                        '$itens.quantidade',
                    ],
                },
            },
            totalDesconto: { $sum: '$itens.desconto' },
        },
    },
    {
        $addFields: {
            user: user.username,
        },
    },
]);

console.log(result);
