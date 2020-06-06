import knex from '../database/connection';
import { Request, Response} from 'express'

class pointsController {
    async index(request: Request, response: Response){
        const {city, uf, items} = request.query;
        
        const parsedItems = String(items)
            .split(',')
            .map(items => Number(items.trim()));
            
        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*')

        const serializedPoints = points.map(point => {
            return {
                ...point,
                image_url: `http://10.0.0.106:3001/uploads/${point.image}`,
                
            };
        })


        return response.json(serializedPoints)
    }

    async show(request: Request, response: Response){
        const { id } = request.params;

        const point = await knex('points').where('id', id).first();

        if(!point){
            return response.status(404).json({message: 'Point not found'})
        }

        const serializedPoints = {
                ...point,
                image_url: `http://10.0.0.106:3001/uploads/${point.image}`,
        }

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title');

        
        return response.json({point: serializedPoints, items});
    }

    async create(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;
    
        const trx = await knex.transaction();
        const point = {
            image: request.file.filename,
            name: name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
        }
        const insertIds = await trx('points').insert(point);
        const point_id = insertIds[0];
        const pointItems = items
            .split(',')
            .map((item:string)=>Number(item.trim()))
            .map((item_id: Number)=>{
                return {
                    item_id,
                    point_id,
                };
            })
        await trx('point_items').insert(pointItems);
        await trx.commit();

        
        return response.json({
            id: point_id,
            ...point,
        });
    }
}
export default pointsController;