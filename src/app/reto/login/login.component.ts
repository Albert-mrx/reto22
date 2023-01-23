import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
//   urlRedireccion = ''; //ruta a la que va a ir, puede ser a la que intenta acceder o no, dependiendo de si tiene autorizacion

//   suNombre ='';
//   suPass= '';


//   //metodo del btn
//   login(){

//     // alert(this.suNombre+' '+ this.suPass);
//     //si los campos no estan vacios
//   if(this.suNombre.trim().length!==0 && this.suPass.trim().length!==0){
//       this.autenticacion.login();
//       this.urlRedireccion=this.autenticacion.urlUsuarioIntentaAcceder; //capturamos el string
//       this.autenticacion.urlUsuarioIntentaAcceder=''; //una vez que urlRedireccion ya guardó el string, lo limpiamos
//       this.router.navigate([this.urlRedireccion]); //y navegamos a esa ruta, procedemos a IR A CANACTIVATE
//     }
//     else{
//       return
//     }



// }
constructor(private autenticacion: AutenticacionService, private router: Router){}

usuario= 'mar';
password = '12345';

redireccion = '';
usuarioErrorMensaje = '';
passwordErrorMensaje = '';

login(user:string, pass:string){
  if(user == this.usuario && pass == this.password){
  this.autenticacion.login();
  this.redireccion = this.autenticacion.urlUsuarioIntentaAcceder;
  this.autenticacion.urlUsuarioIntentaAcceder = '';
  this.router.navigate([this.redireccion]);
  this.router.navigate(['/registro']);
  }else{
  this.usuarioErrorMensaje = 'Usuario es requerido';
  this.passwordErrorMensaje = 'Password es requerido';
  }

}
}
