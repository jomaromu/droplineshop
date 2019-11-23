import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/partes/navbar/navbar.component';
import { CategoriasComponent } from './componentes/partes/categorias/categorias.component';
import { FooterComponent } from './componentes/partes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriasComponent,
    FooterComponent,
    HomeComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
