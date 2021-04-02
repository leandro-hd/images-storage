import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import CategoryController from './controllers/CategoryController';

const routes = Router();

const upload = multer(uploadConfig);

routes.get('/category', CategoryController.index);
routes.post('/category', upload.array('images'), CategoryController.store);

export default routes;