import { Component } from '@angular/core';
import {UserdataService} from './services/userdata.service'
import {NotifierService} from './services/notifier.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogg';
  users:any;
  constructor(private notifier: NotifierService, private userData: UserdataService)
  {
    console.warn((this.userData.users))
    this.users=this.userData.getAllUsers();
  }
  //Posting API (Form)
  getUserForm(data: any){
    console.warn(data)
    this.notifier.postAPIData(data).subscribe((result)=>{
      console.warn("results", result)
    })
  }
}
