export class Usuario {

    constructor( _id = '', nombre_usuario = '', correo= '', contrasena='', contrasena2='' ){
        this._id = _id;
        this.nombre_usuario = nombre_usuario;
        this.correo = correo;
        this.contrasena = contrasena;
        this.contrasena2 = contrasena2;
    }

    _id: string;
    nombre_usuario: string;
    correo: string;
    contrasena: string;
    contrasena2: string;
   
}
