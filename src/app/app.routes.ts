import { Routes } from '@angular/router';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { PersonaFormComponent } from './components/persona-form/persona-form.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // La ruta de login es accesible sin autenticación
  { path: 'personas', component: PersonaListComponent, canActivate: [AuthGuard] }, // Rutas protegidas con AuthGuard
  { path: 'personas/create', component: PersonaFormComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: UsuarioListComponent, canActivate: [AuthGuard] },
  { path: 'usuarios/create', component: UsuarioFormComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a login por defecto
];
