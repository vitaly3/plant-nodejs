import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { CncPageComponent } from './pages/cnc-page/cnc-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { DepartmentsPageComponent } from './pages/departments-page/departments-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserFormComponent } from './pages/users-page/user-form/user-form.component';
import { UsersNavComponent } from './pages/users-page/users-nav/users-nav.component';
import { UsersListComponent } from './pages/users-page/users-list/users-list.component';
import { UsersLogComponent } from './pages/users-page/users-log/users-log.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    CncPageComponent,
    LoaderComponent,
    DepartmentsPageComponent,
    UsersPageComponent,
    UserFormComponent,
    UsersNavComponent,
    UsersListComponent,
    UsersLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
