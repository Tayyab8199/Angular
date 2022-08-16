import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { userdataResolveService } from './userdata-resolve.service';
import { UserdataService } from './services/userdata.service';
import { AuthGuard } from './guards/auth.guard';
import { CandeactGuard } from './guards/candeact.guard';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { MyCellRendererComponent } from './my-cell-renderer/my-cell-renderer.component';
import { MoodRendererComponent } from './mood-renderer/mood-renderer.component';
import { CellEditorComponent } from './cell-editor/cell-editor.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ReportsComponent,
    AboutComponent,
    ContactsComponent,
    AgGridComponent,
    MyCellRendererComponent,
    MoodRendererComponent,
    CellEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  providers: [userdataResolveService, UserdataService, AuthGuard, CandeactGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
