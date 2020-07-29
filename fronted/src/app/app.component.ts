import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fronted';

  constructor(private usuarioService: UsuarioService){}

    OnLogout(): void{
      this.usuarioService.logoutUser();
    }
  

}
