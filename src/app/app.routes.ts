import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];
