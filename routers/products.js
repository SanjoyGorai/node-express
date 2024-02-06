import express from 'express';
import productController from '../controllers/product.js';

const router = express.Router();

const getProducts = router.get('/api/v1', (req, res) => {
    res.send('Sanjoy Gorai..')
})

export const getProductFun = router.get('/api', productController);

export default getProducts;