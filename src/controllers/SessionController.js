/*
    index: listagem de sessoes
    store: Criar uma sessao
    show listar uma UNICA sessao
    update: alterar alguma sessao
    destroy: deletar uma sessao
*/

import User from "../models/User";

class SessionController{
    async store(req, res){
        const { email } = req.body;

        //verificar se o email existe no banco de dados
        let user = await User.findOne({ email })

        if(!user){
            user = await User.create({ email })
        }

       //return res.json({message: "Esse email já existe no banco de dados"});

        return res.json({user});
    }
}

export default new SessionController();