export class Usuario {

    constructor( _id = '', nombre_usuario = '', correo= '', contrasena=''){
        this._id = _id;
        this.nombre_usuario = nombre_usuario;
        this.correo = correo;
        this.contrasena = contrasena;
    }

    _id: string;
    nombre_usuario: string;
    correo: string;
    contrasena: string;
   
}
