import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
//router
import { LoginComponent} from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';

const routes: Routes = [
  { path: '',   redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: 'recuperar-senha', component: RecuperarSenhaComponent},
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
