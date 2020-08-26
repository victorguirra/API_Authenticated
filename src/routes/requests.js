const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ Message: "Showing All Requests!" })
})

router.post('/', (req, res) => {
    res.status(200).json({ Message: "Successfully Added New Request!" })
})

router.get('/:id', (req, res) => {
    res.status(200).json({ Message: `Show An Sigle Request With Id: ${ req.params.id }` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ Message: "Successfully Deleted Request!" })
})

module.exports = router;