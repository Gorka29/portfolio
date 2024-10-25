import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];
