import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { AuthGuard } from './guards/auth.guard';
import { userdataResolveService } from './userdata-resolve.service';
import { LoginComponent } from './login/login.component';
import { CandeactGuard } from './guards/candeact.guard';
import { AgGridComponent } from './ag-grid/ag-grid.component';

const routes: Routes = [
  
  {path: 'admin',
   canActivate: [AuthGuard],
   loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path: 'reports', component: ReportsComponent},
  {path: 'about', component: AboutComponent, resolve: { users: userdataResolveService}},
  {path: 'ag-grid', component: AgGridComponent}, 
  {path: 'contacts', component: ContactsComponent},
  {path: 'login',
  component: LoginComponent,
  canActivate: [AuthGuard],
  canDeactivate: [CandeactGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
