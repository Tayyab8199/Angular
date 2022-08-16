import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(component: LoginComponent){
    if(component.isDirty){
      return window.confirm('You have unsaved changes. Are you sure you want to exit?')
    }
    return true;
  }
  
}
