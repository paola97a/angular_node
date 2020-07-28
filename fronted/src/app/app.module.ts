import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { InfoComponent } from './components/info/info.component';
import { LibrosComponent } from './components/libros/libros.component';
import { ComicsComponent } from './components/comics/comics.component';
import { RevistasComponent } from './components/revistas/revistas.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { from } from 'rxjs';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    InfoComponent,
    LibrosComponent,
    ComicsComponent,
    RevistasComponent,
    LoginComponent,
    RegistroComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
