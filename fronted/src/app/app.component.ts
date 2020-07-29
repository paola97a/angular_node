import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fronted';
  public isLogged: boolean = false;
  public isName: boolean = false;
  public usu; 

  ngOnInit()
  {
    this.onCheckUser();
    
  }
  constructor(private usuarioService: UsuarioService){}

  OnLogout(): void{
    this.usuarioService.logoutUser();
  }
  
  onCheckUser(): void {
    
    if(this.usuarioService.getCurrentUser()==null)
    {
      this.isLogged = false;
    }
    else
    {
      this.usu = this.usuarioService.getCurrentUser()
      console.log("esto es uso");
      console.log(this.usu);
      console.log(this.usu.email);
      console.log(this.usu.password);
      this.isLogged = true;
      this.OnName();
    }
  }

  OnName(): void{
    if(this.usuarioService.getCurrentUser() == null)
    {
      this.isName = false;
    }
    else
    {
      this.isName = true;
    }
  }
}
