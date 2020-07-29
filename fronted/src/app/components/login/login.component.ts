import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string;
  password: string;

  public isError = false;
  
  constructor(public usuarioService : UsuarioService) { }

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
            console.log(data);
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
