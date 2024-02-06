import express from 'express';

const app = express.Router();

const getProducts = app.get('/api', (req, res) => {
    res.send('Sanjoy Gorai..')
})

export default getProducts;