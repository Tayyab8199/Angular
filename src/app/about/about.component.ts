import { state } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from '../services/notifier.service';
import { UserdataService } from '../services/userdata.service'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users: any;
  usrlist: any;
  inputdata: any;
  usrid: any;
  usr:any;
  item:any;
  constructor(private notifierService: NotifierService, private post: UserdataService, private userData: UserdataService, private route: ActivatedRoute, private userdataService: UserdataService, private router: Router) {
    console.warn((this.userData.users))
    this.users = this.userData.getAllUsers();
  }
  navigate() {
    this.router.navigate(['dashboard'], {
      state: { example: 'data' }
    })
  }
  ngOnInit(): void {
    this.userdataService.message$
      .subscribe(
        message => {
          alert('Hey');
        }
      )
    this.users = this.route.snapshot.data['users'];
    console.log("user", this.users)

    //Calling Mockoon API(Get)
    this.userdataService.getAPIData().subscribe((data) => {
      this.usrlist = data;
      // console.warn("data", data)
    })
  }
  postResp() {
    this.userdataService.postAPIData(this.inputdata).subscribe(results => {
      console.warn(results);
      this.usr =results;
    })
  }

  getDataById(id:any){
    this.userdataService.getByCode(id).subscribe(result =>{
this.usrid=result;
    })
  }
}
