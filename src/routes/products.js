const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ Message: "Showing All Products!" })
})

router.post('/', (req, res) => {
    const product = {
        name: req.body.name,
        price: req.body.price,
    }

    res.status(201).json({ 
        Message: "Add New Product!",
        createdProduct: product 
    })
    
})

router.get('/:id', (req, res) => {
    res.status(200).json({ Message: `Show Single Product With Id: ${ req.params.id }` })
})

router.put('/:id', (req, res) => {
    res.status(200).json({ Message: "Update A Single Product!" })
})

router.delete('/:1', (req, res) => {
    res.status(200).json({ Message: "Delete a Product!" })
})

module.exports = router;    