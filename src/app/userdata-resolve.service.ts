import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { UserdataService } from "./services/userdata.service";

@Injectable()
export class userdataResolveService implements Resolve<any>{
constructor(private userdata: UserdataService){

}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return this.userdata.getAllUsers().then((data) =>{
            return data;
        
        });
    }
}