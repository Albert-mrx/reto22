import { Injectable } from '@angular/core';
import { CanDeactivate} from '@angular/router';
import { Observable } from 'rxjs';

interface Desactivar {
  SalirDeRuta: () => Observable<boolean> | boolean;
  }

  @Injectable({
  providedIn: 'root'
  })

  export class CandesactivateGuard implements CanDeactivate<Desactivar> {
  canDeactivate(component: Desactivar) {
  return component.SalirDeRuta ? component.SalirDeRuta(): true;
}
}
