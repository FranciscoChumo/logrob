import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createPro, getPro, updatePro } from '../controller/ProductController.js';
import { createCat, getCat } from '../controller/CategoricController.js';

const rotuer = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

rotuer.post('/register', createPro);  
rotuer.get('/product',  getPro);
rotuer.put('/update/:id', updatePro);

rotuer.post('/registercat',  createCat);
rotuer.get('/cat',getCat);

export const Product = rotuer;
