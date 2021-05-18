import * as dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import './database/index';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.listen(process.env.PORT || 3333);