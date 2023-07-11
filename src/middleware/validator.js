const {response} = require('express');
const jwt = require('jsonwebtoken');


const validator=(req,res= response,next) =>{
    const token = req.header('x-token');

    if (!token) {
        return res.status(500).json({
            success:false,
            message: 'no existe token en el encabezado'
        });
    }
    try {
        //'DAN-AUD-ALE'
        // process.env.SECRET_JWT
        const {id,name,lastName,email} = jwt.verify(
            token,
            process.env.SECRET_JWT
        );
        req.id =id,
        req.name=name,
        req.lastName = lastName,
        req.email =email
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:'el token no es válido'
        });
    }
    next();
}


module.exports={
    validator,
    
}