let shoeData = [
    {
        type: 'Nike',
        color: 'Red',
        size: 12
    },
    {
        type: 'Reebok',
        color: 'Blue',
        size: 9
    },
    {
        type: 'Adidas',
        color: 'Yellow',
        size: 6
    },
    {
        type: 'Puma',
        color: 'Green',
        size: 7
    }
];

let sockData = [
    {
        type: 'Stance',
        color: 'Red',
        size: 'S'
    },
    {
        type: 'Nike',
        color: 'White',
        size: 'M'
    },
    {
        type: 'Reebok',
        color: 'Green',
        size: 'L'
    },
];

module.exports = {
    getShoeData: function (req,res) {
        res.json(shoeData);
    },
    getSockdata: function (req,res) {
        res.json(sockData);
    }
}
