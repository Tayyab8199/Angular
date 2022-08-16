import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

export interface MyCellParams{
  buttonText?: any;  
}

@Component({
  selector: 'app-my-cell-renderer',
  templateUrl: './my-cell-renderer.component.html',
  styleUrls: ['./my-cell-renderer.component.css']
})
export class MyCellRendererComponent implements OnInit, ICellRendererAngularComp {
  value: any;
  buttonText: any ='Default'
  constructor() { }
  agInit(params: ICellRendererParams & MyCellParams): void {
    this.value = params.value
    this.buttonText = params.buttonText;
  }
  refresh(params: ICellRendererParams<any, any>): boolean {
    return false
  }

  ngOnInit(): void {
  }
click(event: any){
  alert('Cell value is ' + this.value)
}
}
