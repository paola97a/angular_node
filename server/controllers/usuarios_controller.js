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

}

usuariosController.deleteUsuario = (req, res) => {
    
}
module.exports =  usuariosController;