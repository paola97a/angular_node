import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario }  from '../clases/usuario';

import { Observable } from 'rxjs/Observable';

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
 
  getUsuarios() { //pedir datos
    return this.http.get(this.URL_API);
    
  }
  postUsuarios( usuario: Usuario) { //agregar usuario
    return this.http.post(this.URL_API, usuario);
  }//comentario

  login(usuario: any): Observable <any> {
    
    console.log(usuario)
    return this.http.post(this.URL_API + '/login_2' , usuario);
  }




  ////////////////////////

  setUser(user: Usuario): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): Usuario {
    let user_string = localStorage.getItem("currentUser");
    if (user_string != null || user_string != undefined) {
      let user: Usuario = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser(){
    let accessToken = localStorage.getItem("accessToken");

    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");

    //return this.http.post(this.URL_API, usuario);
  }

  /*deleteUsuario(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }*/
}
