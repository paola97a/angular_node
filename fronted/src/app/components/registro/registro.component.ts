import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [ UsuarioService ]
})
export class RegistroComponent implements OnInit {


 constructor( public usuarioService : UsuarioService) { }

  ngOnInit(): void {
  }

  resetForm(form ?: NgForm){
    if(form){
      form.reset();
      this.usuarioService.selectedUsuario = new Usuario();
    }
  }

  addUsuario(form : NgForm){
    
    if(form.valid)
    {
      this.usuarioService.postUsuarios(form.value).subscribe ( res =>{});
      alert("Registro correcto");
      this.resetForm(form);
    }
    else
    {  
      alert("El Formulario Se Encuentra Vacio");
    }

    
  }
  
 
  

}
