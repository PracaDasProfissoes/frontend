import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { VisitasComponent } from './visitas/visitas.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MatSidenavModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


const routes: Routes = [
  { path: '', component: MenuComponent,
    children: [
      {path: '', redirectTo: 'calendario', pathMatch: 'full'},
      {path: 'calendario', component: CalendarioComponent},
      {path: 'perfil', component: PerfilComponent},
      {path: 'alunos', component: AlunosComponent},
      {path: 'visitas', component: VisitasComponent},
    ]
  }
]


@NgModule({
  declarations: [MenuComponent, VisitasComponent, AlunosComponent, CalendarioComponent, PerfilComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
