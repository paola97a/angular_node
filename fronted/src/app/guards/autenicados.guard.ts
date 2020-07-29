import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';

import { UsuarioService } from '../services/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class AutenicadosGuard implements CanActivate {

constructor( private UsuarioService: UsuarioService, private router: Router){}

  canActivate()
  {
    if(this.UsuarioService.getCurrentUser())
    {
      return true;
    }
    else
    {
      this.router.navigate(["/login"]);
      return false
    }
  }
  
}
