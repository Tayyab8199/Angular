import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input()  username ="Tayyab";
  @Output() newUserEvent = new EventEmitter<string>();
  constructor(private router: Router, private activeroute: ActivatedRoute, private snackBar: MatSnackBar) {
    // this.name = this.router.getCurrentNavigation()
    // .extras.state.example;
   }
   notification(message: any, buttonText: any){
    this.snackBar.open(message, buttonText);
  }
   exm:any
  //  name: ''; 
  ngOnInit(): void {
    this.exm = this.activeroute.snapshot.paramMap.get('example')
    console.log("exm",this.exm)
  }

  addNewUser(value: string){
    this.newUserEvent.emit(value);
  }
 
}
