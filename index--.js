import express from 'express';
import { PORT } from './config.js';
import mongoose from 'mongoose';


const app = express();

app.get('/', (req, res) => {
    
    res.send('hello');
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

