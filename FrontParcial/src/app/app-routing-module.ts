import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Iniciosesioncomponent } from './components/iniciosesioncomponent/iniciosesioncomponent';
import { Registercomponent } from './components/registercomponent/registercomponent';
import { Admincomponent } from './components/admincomponent/admincomponent';
import { Usuariocomponent } from './components/usuariocomponent/usuariocomponent';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Iniciosesioncomponent },
  { path: 'registro', component: Registercomponent },
  { path: 'admin', component: Admincomponent },
  { path: 'usuarios', component: Usuariocomponent },
  { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
