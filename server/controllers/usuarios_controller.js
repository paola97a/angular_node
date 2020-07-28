const dbconnection =  require('../dbconection');

const connection = dbconnection();
console.log('se contecta');

const usuariosController = {};

usuariosController.getUsuarios = (req, res) => {
    connection.query('SELECT * FROM  usuario' , (err, result) =>{
        //console.log(result);
        res.send(result);
    })
    
}

usuariosController.createUsuarios = (req, res) => {
    const { nombre_usuario, correo,  contrasena} = req.body;
    connection.query('INSERT INTO usuario SET ? ',
    {
        nombre_usuario,
        correo,
        contrasena 
    });

    return "ok";
}

usuariosController.getUsuario = (req, res) => {
    const { email, password} = req.body;
    //console.log('entra');
    //console.log(req.body);
    const usuarioEncontrado = connection.query(' SELECT  correo, contrasena FROM usuario WHERE correo = ? and contrasena= ?', [email, password], 
    (err,rows)=>{
        if(err) {
            var error = {
                message: 'No existe Usuario', //Aun no se muestra mensaje
              
            };
 
            return res.send(error);
        }
 
        if(rows.length > 0) {
            var exito = {
                message: 'Existe Usuario',
                code: 2
            };
            return res.send(exito);
        }

    });
}

usuariosController.deleteUsuario = (req, res) => {
    
}
module.exports =  usuariosController;