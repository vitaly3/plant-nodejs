import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { CncPageComponent } from './pages/cnc-page/cnc-page.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { DepartmentsPageComponent } from './pages/departments-page/departments-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    CncPageComponent,
    LoaderComponent,
    DepartmentsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
