import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { CncPageComponent } from './pages/cnc-page/cnc-page.component';
import { DepartmentsPageComponent } from './pages/departments-page/departments-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserFormComponent } from './pages/users-page/user-form/user-form.component';
import { UsersListComponent } from './pages/users-page/users-list/users-list.component';
import { UsersLogComponent } from './pages/users-page/users-log/users-log.component';


const routes: Routes = [
  {
    path: '', component: SiteLayoutComponent, children: [
      {path: '', redirectTo: '/departments', pathMatch: 'full'},
      {path: 'departments', component: DepartmentsPageComponent, children:[
        {path: ':id', component: CncPageComponent}
      ]},
      {path: 'users', component: UsersPageComponent, children:[
        {path: '', component: UsersListComponent},
        {path: 'log', component: UsersLogComponent},
        {path: ':id', component: UserFormComponent}
      ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
