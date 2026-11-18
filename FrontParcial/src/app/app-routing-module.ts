import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Iniciosesioncomponent } from './components/iniciosesioncomponent/iniciosesioncomponent';
import { Registercomponent } from './components/registercomponent/registercomponent';
import { Admincomponent } from './components/admincomponent/admincomponent';
import { Usuariocomponent } from './components/usuariocomponent/usuariocomponent';
import { Productocomponent} from './components/productocomponent/productocomponent';
import{Usuariovistacomponent} from './components/usuariovistacomponent/usuariovistacomponent';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Iniciosesioncomponent },
  { path: 'registro', component: Registercomponent },
  { path: 'admin', component: Admincomponent },
  { path: 'usuarios', component: Usuariocomponent },
  { path: 'productos', component: Productocomponent },
  { path: 'usuariovista', component: Usuariovistacomponent },
  { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
