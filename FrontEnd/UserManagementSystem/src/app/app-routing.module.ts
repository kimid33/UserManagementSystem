import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Admin/pages/login/login.component';
import { DashboardComponent } from './Admin/pages/dashboard/dashboard.component';
import { ListOfWorkersComponent } from './Admin/pages/list-of-workers/list-of-workers.component';
import { ListofsupervisorComponent } from './Admin/pages/listofsupervisor/listofsupervisor.component';
import { AddUserComponent } from './Admin/pages/add-user/add-user.component';
import { ImageCapturingComponent } from './Admin/components/image-capturing/image-capturing.component';

const routes: Routes = [
  {
     path:'',
     component:LoginComponent
  },
  {
    path:'imageCapture',
    component:ImageCapturingComponent
  },
  {
     path:'dashboard',
     component:DashboardComponent,
     children:[
      {
        path:'listOfWorker',
        component:ListOfWorkersComponent
      },
      {
        path:'listOfSupervisor',
        component:ListofsupervisorComponent
      },
      {
        path:'addUser',
        component:AddUserComponent
      }
     ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
