
const Users = require('./datos');

exports.crearUser =  async(req,  res, next) => {
     const user = {  
        user: req.body.user,
        pass: req.body.pass
    };

  try {
    const creadoUsers = await Users.create(user);
    res.json({message: 'Usuario y Contraseña creados'});

  }catch (err){
    res.json({fail:err});
  }


}

exports.getUser= async (req, res, next) => {


    try{
         const creadoUsers = await Users.get({});
         res.status(200).json({Users: Users});
    
    }catch (err){
        res.status(500).json({error: 'internal server Error'});
    }

    
};


   





  


 




