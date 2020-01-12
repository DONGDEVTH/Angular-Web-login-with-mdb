
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { ServiceComponent } from './service/service.component';
import { routing } from "./app.routing";
import { PageComponent } from './page/page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HotspotComponent } from './hotspot/hotspot.component';
import { DomainComponent } from './domain/domain.component';
import { FileserverComponent } from './fileserver/fileserver.component';
import { SystemmanagementComponent } from './systemmanagement/systemmanagement.component';
import { SystemmonitoringComponent } from './systemmonitoring/systemmonitoring.component';
import { StreamingsystemComponent } from './streamingsystem/streamingsystem.component';
import { CctvComponent } from './cctv/cctv.component';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';

import { fakeBackendProvider } from './_helpers';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    PageComponent,
    AboutusComponent,
    HotspotComponent,
    DomainComponent,
    FileserverComponent,
    SystemmanagementComponent,
    SystemmonitoringComponent,
    StreamingsystemComponent,
    CctvComponent,
    ProductComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,routing,
    BrowserAnimationsModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
