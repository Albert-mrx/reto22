import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

import { RegistroComponent } from './registro/registro.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    MenuComponent,
    RegistroComponent
  ]
})
export class RetoModule { }
