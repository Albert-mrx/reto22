import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactivateGuard } from './candesactivate.guard';
import { HomeComponent } from './reto/home/home.component';
import { LoginComponent } from './reto/login/login.component';
import { RegistroComponent } from './reto/registro/registro.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path:'',component: LoginComponent},
  {path: 'registro', component: RegistroComponent,canActivate:[CanactivateGuard], canDeactivate: [CandesactivateGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
