import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string;
  password: string;

  public isError = false;
  
  constructor(public usuarioService : UsuarioService, public router:Router) { }

  ngOnInit(): void {
  }
  login(){
    
    if(this.email != null && this.password != null)
    {
      const user = {email: this.email, password: this.password};
    this.usuarioService.login(user).subscribe( data =>{
          
          if(data.code == 1)
          {
            this.isError = true;
            setTimeout(() => {
            this.isError = false;
            }, 4000);
        
          }
          else{
            console.log("esta es la data");
            console.log(data);
            this.usuarioService.setUser(data.user);
            let token = data.code;
            this.usuarioService.setToken(token);
            this.router.navigateByUrl('/');
            
          }
      },
        err => console.log(err)
      );
    }
    else{
      alert("login Vacio");
    }


    

  }

}
