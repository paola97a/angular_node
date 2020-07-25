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

  addUsuario(form : NgForm){
    this.usuarioService.postUsuarios(form.value).subscribe ( res =>{
        //console.log(res); //observar si se ha llenado el formulario
        this.resetForm(form);
        console.log('usuario registrado');

    });

  }
  
  resetForm(form ?: NgForm){
    if(form){
      form.reset();
      this.usuarioService.selectedUsuario = new Usuario();
    }
  }
  

}
