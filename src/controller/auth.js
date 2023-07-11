const User = require('../models/user')
const { generateJWT } = require('../helper/jwt');
const bcrypt = require ('bcryptjs');

const singUp= async (req, res)=>{
    const {email}= req.body;

    try{
        let validation = await User.findOne ({email});
        if ( validation){
            return res.status(400).json({
                succes: false,
                error: 'El correo ya existe'
            });
        }
        validation= new User(req.body);
        const salt = bcrypt.genSaltSync(10);
        const pass = bcrypt.hashSync(validation.password, salt);
        validation.password=pass
        
        await validation.save();

        const token = await generateJWT(
            validation.id,
            validation.name,
            validation.lastName,
            validation.email,
        )

        return res.status(200).json({
            succes: true,
            validation,
            token
        })

    }catch(error){
        res.status(500).json({
            succes:false,
            error: error.message
        })
    }
}

const validationToken = async (req, res)=>{
    try{
        res.status(200).json({
            succes: true,
            message: 'El token es valido'
        })
    }catch(error){
        res.status(200).json({
            succes:false,
            error: message.error
        })

    }
}

module.exports={
    singUp,
    validationToken
}