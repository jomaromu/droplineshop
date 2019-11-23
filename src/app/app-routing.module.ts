import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { HomeComponent } from './componentes/home/home.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'busqueda', component: BusquedaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
