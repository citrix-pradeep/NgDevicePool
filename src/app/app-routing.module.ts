import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DevicedetailComponent } from './devicedetail/devicedetail.component';
import { MainwindowComponent } from './mainwindow/mainwindow.component';

const routes: Routes = [{
  path:'',
  component: MainwindowComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path: 'deviceDetail',
  component:DevicedetailComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
