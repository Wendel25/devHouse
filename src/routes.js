import Router from 'express';
import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/session', SessionController.store);

routes.post('/houses', upload.single('thumbnail'), HouseController.store);

routes.get('/houses', HouseController.index);

routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);

export default routes;