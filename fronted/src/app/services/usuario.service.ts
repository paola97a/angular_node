import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario }  from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  selectedUsuario: Usuario; //almacenar en tipo de dato usuario

  usuarios: Usuario[]; //arreglo de usuarios para almacenar
  private URL_API = 'http://localhost:3000';
  //readonly

  constructor(private http: HttpClient) {
    this.selectedUsuario = new Usuario();
  }
 /*
  registro(user){
    return this.http.post(this.URL_API + '/registro', user)
  }*/

  getUsuarios() { //pedir datos
    return this.http.get(this.URL_API);
    
  }
  postUsuarios( usuario: Usuario) { //agregar usuario
    return this.http.post(this.URL_API, usuario);
  }

  /*deleteUsuario(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }*/
}
