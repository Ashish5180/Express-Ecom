// server.js or index.js or app.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import ownersRouter from './routers/ownersRouter.js';
import productsRouter from './routers/productsRouter.js';
import usersRouter from './routers/usersRouter.js';
import db from './config/mongoose-connect.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());  // For parsing application/json
app.use(express.urlencoded({ extended: true })); 
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());



app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
