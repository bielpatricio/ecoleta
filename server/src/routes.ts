import express from 'express';
import pointsController from './controllers/pointsController';
import itemsController from './controllers/itemsController';
import multer from 'multer'
import multerConfig from './config/multer'
import {celebrate, Joi} from 'celebrate'

const routes = express.Router();
const upload = multer(multerConfig);

const pointsContrl = new pointsController()
const itemsContrl = new itemsController()

routes.get('/items', itemsContrl.index);

routes.get('/points/', pointsContrl.index);
routes.get('/points/:id', pointsContrl.show);

routes.post(
    '/points',
     upload.single('image'),
     celebrate({
         body: Joi.object().keys({
             name: Joi.string().required(),
             email: Joi.string().required().email(),
             whatsapp: Joi.number().required(),
             latitude: Joi.number().required(),
             longitude: Joi.number().required(),
             city: Joi.string().required(),
             uf: Joi.string().required().max(2),
             items: Joi.string().required(),
         })
     }, {
         abortEarly: false
     }),
      pointsContrl.create
      
    );


export default routes;