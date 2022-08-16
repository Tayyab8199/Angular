import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, RouterOutlet, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { getMatIconFailedToSanitizeLiteralError } from '@angular/material/icon';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

   constructor(private router: Router, private authservice: AuthserviceService){

  }

  canActivate(){
    if(this.authservice.isUserLoggedIn()){
      return true;
    }else{
      alert('Access denied for this page');
      return false;
    }
  }
}
  

