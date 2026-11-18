import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Iniciosesioncomponent } from './components/iniciosesioncomponent/iniciosesioncomponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Registercomponent } from './components/registercomponent/registercomponent';
import { Navbarcomponent } from './components/navbarcomponent/navbarcomponent';
import { Footercomponent } from './components/footercomponent/footercomponent';
import { Admincomponent } from './components/admincomponent/admincomponent';
import { Usuariocomponent } from './components/usuariocomponent/usuariocomponent';
import { Productocomponent } from './components/productocomponent/productocomponent';
import { Simpsoncomponent } from './components/simpsoncomponent/simpsoncomponent';

import { Usuariovistacomponent } from './components/usuariovistacomponent/usuariovistacomponent';


@NgModule({
  declarations: [
    App,
    Iniciosesioncomponent,
    Registercomponent,
    Navbarcomponent,
    Footercomponent,
    Admincomponent,
    Usuariocomponent,
    Productocomponent,
    Simpsoncomponent,
    Usuariovistacomponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
