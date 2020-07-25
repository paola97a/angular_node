import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LibrosComponent } from './components/libros/libros.component';
import { RevistasComponent } from './components/revistas/revistas.component';
import { ComicsComponent } from './components/comics/comics.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'informacion', component: InfoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'productos', component: ProductosComponent, children: [
    {path: 'libros', component: LibrosComponent},
    {path: 'revistas', component: RevistasComponent},
    {path: 'comics', component: ComicsComponent}
  ]},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
