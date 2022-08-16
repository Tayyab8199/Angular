import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { from, observable } from 'rxjs';
import { NotifierService } from '../services/notifier.service';
import { UserdataService } from '../services/userdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//Using form control, so that we know that the value of form element, whether the value has changed or not
//Biding property to the form's input field,so whenever user do changes we can able to get status through thus variable
  // userName:FormControl = new FormControl();
  isDirty= true;
  
//Calling Service in component (Showing toastr)
  constructor( private authservice: AuthserviceService, private notifierService: NotifierService, private userService: UserdataService, private route: ActivatedRoute) {}
  ngOnInit(): void {
   this.notifierService.showNotification('Service is successfully injected in component', 'OK');
  } 

 
}
