import Reserve from "../models/Reserve";
import User from '../models/User';
import House from '../models/House';

class ReserveController{
    
    async store(req, res){
        const { user_id } = req.headers;
        const { house_id } = req.params;
        const { date } = req.body;

        const house = await House.findById(house_id);
        if(!house){
            return res.status(400).json({error: "Essa casa não existe"})
        }

        if(house.status !== true){
            return res.status(400).json({error: "Essa casa não esá disponivel"})
        }

        const user = await User.findById(user_id)
        if(String(user_id) === String(house.user)){
            return res.status(401).json({error: "Reserva não permitida"})
        }
    
        let reserve = await Reserve.create({
            user: user_id,
            house: house_id,
            date,
        });
    
        reserve = await Reserve.populate(reserve, { path: 'user' });
        reserve = await Reserve.populate(reserve, { path: 'house' });
    
        return res.json(reserve);
    }

    async show(req, res){

    }
}

export default new ReserveController();