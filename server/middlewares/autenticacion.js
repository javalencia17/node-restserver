
const jwt =  require('jsonwebtoken');

//=======================
//Verificar token
//=======================

let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED , (err, decoded) => {

        if (err){
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'token no valido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    });

   
};

//=======================
//Verificar AdminRole
//=======================

let verificaAdmin_Role = (req, res, next) => {
    let usuario = req.usuario;

    console.log(usuario.role);

    if( usuario.role === 'ADMIN_ROLE'){
        next();
    }else{
        return res.status(400).json({
            ok:false,
            err: {
                message: 'No tiene los privilegios para hacer esta operacion'
            }
        });
    }

    
}

module.exports = {
    verificaToken,
    verificaAdmin_Role
}