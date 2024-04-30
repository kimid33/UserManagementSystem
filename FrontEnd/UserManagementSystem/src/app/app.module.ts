import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './Admin/pages/login/login.component';
import { SidebarComponent } from './Admin/components/sidebar/sidebar.component';
import { NavbarComponent } from './Admin/components/navbar/navbar.component';
import { DashboardComponent } from './Admin/pages/dashboard/dashboard.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListOfWorkersComponent } from './Admin/pages/list-of-workers/list-of-workers.component';
import { ListofsupervisorComponent } from './Admin/pages/listofsupervisor/listofsupervisor.component';
import { AddUserComponent } from './Admin/pages/add-user/add-user.component';
import { ConfirmDialogComponent } from './Admin/components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageCapturingComponent } from './Admin/components/image-capturing/image-capturing.component';
import { WebcamModule } from 'ngx-webcam';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    ListOfWorkersComponent,
    ListofsupervisorComponent,
    AddUserComponent,
    ConfirmDialogComponent,
    ImageCapturingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
