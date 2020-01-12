import { Routes, RouterModule } from "@angular/router";

import { ServiceComponent } from "./service/service.component";
import { PageComponent } from "./page/page.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { HotspotComponent } from './hotspot/hotspot.component';
import { DomainComponent } from './domain/domain.component';
import { FileserverComponent } from './fileserver/fileserver.component';
import { SystemmanagementComponent } from './systemmanagement/systemmanagement.component';
import { SystemmonitoringComponent } from './systemmonitoring/systemmonitoring.component';
import { StreamingsystemComponent } from './streamingsystem/streamingsystem.component';
import { CctvComponent } from './cctv/cctv.component';
import { ProductComponent } from './product/product.component';
import { ContactusComponent } from './contactus/contactus.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';


const routes: Routes = [
   
    { path: "service", component: ServiceComponent, canActivate: [AuthGuard] },
    { path: "page", component: PageComponent, canActivate: [AuthGuard] },
    { path: "aboutus", component: AboutusComponent, canActivate: [AuthGuard] },
    { path: "hotspot", component: HotspotComponent, canActivate: [AuthGuard] },
    { path: "domain", component: DomainComponent, canActivate: [AuthGuard] },
    { path: "fileserver", component: FileserverComponent, canActivate: [AuthGuard] },
    { path: "systemmanage", component: SystemmanagementComponent, canActivate: [AuthGuard] },
    { path: "systemmonitoring", component: SystemmonitoringComponent, canActivate: [AuthGuard] },
    { path: "streaming", component: StreamingsystemComponent, canActivate: [AuthGuard] },
    { path: "cctv", component: CctvComponent, canActivate: [AuthGuard] },
    { path: "product", component: ProductComponent, canActivate: [AuthGuard] },
    { path: "contactus", component: ContactusComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
    { path: "", component: HomeComponent, canActivate: [AuthGuard]  },

    { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(routes);
