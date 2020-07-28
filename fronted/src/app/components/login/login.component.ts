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

  constructor(public usuarioService : UsuarioService) { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.email);
    console.log(this.password);

    const user = {email: this.email, password: this.password};
    this.usuarioService.login(user).subscribe( data =>{
         console.log(data);
          //this.userService.setToken(data.token);
         //this.router.navigateByUrl('/');
      
    
        
    },
      err => console.log(err)
    );

  }

}
