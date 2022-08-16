import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {


  constructor(private userdataService: UserdataService) { }
   hello(){
    this.userdataService.sendmessage('Hello World!'); 
   }

  ngOnInit(): void {
  }
  currentuser = 'Asad';
  users = ['Tayyab', 'Tariq'];
  addUser(newuser: string){
    this.users.push(newuser);
  }
}
