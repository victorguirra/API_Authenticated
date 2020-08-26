const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ Message: "Using GET Method!" })
})

router.post('/', (req, res) => {
    res.status(200).json({ Message: "Using POST Method!" })
})

router.get('/:id', (req, res) => {
    res.status(200).json({ Message: `Return Product With Id: ${ req.params.id }` })
})

router.patch('/', (req, res) => {
    res.status(200).json({ Message: "Using PATCH Method!" })
})

router.delete('/', (req, res) => {
    res.status(200).json({ Message: "Using DELETE Method!" })
})

module.exports = router;    