import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userLogin=false;
  constructor(public autenticacion: AutenticacionService ){}
  ngOnInit(){
    this.userLogin = this.autenticacion.isLoggedIn('');
    this.autenticacion.changeLoginStatus$.subscribe(
    (estado: boolean) => this.userLogin = estado
    );
  }

  logout(){
    this.autenticacion.logout();
  }
}
