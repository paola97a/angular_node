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

usuariosController.logear = (req, res) => {
    const { email, password} = req.body;
    //console.log('entra');
    //console.log(req.body);
    const usuarioEncontrado = connection.query(' SELECT  correo, contrasena FROM usuario WHERE correo = ? and contrasena= ?', [email, password], 
    (err,rows)=>{
        user = {
            email: email,
            password: password,
        }
        if(rows.length > 0) {
            var exito = {
                user,
                message: 'Existe Usuario',
                code: 2
            };
            console.log("valriable exito");
            console.log(exito);

            return res.send(exito);
        }
        else
        {
            var exito = {
                message: 'usuario o contraseña incorrectos',
                code: 1
            };
            return res.send(exito);
        }
    });
}

usuariosController.deleteUsuario = (req, res) => {
    
}
module.exports =  usuariosController;