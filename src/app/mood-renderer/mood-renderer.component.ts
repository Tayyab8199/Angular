import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-mood-renderer',
  templateUrl: './mood-renderer.component.html',
  styleUrls: ['./mood-renderer.component.css']
})
export class MoodRendererComponent implements OnInit, ICellRendererAngularComp {

  constructor() { }
  private params!: ICellRendererParams;
  private mood!: string;
  public imgForMood!: string;

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.setMood(params);
  }

  refresh(params: any): boolean {
    this.params = params;
    this.setMood(params);
    return false;
  }

  private setMood(params: ICellRendererParams) {
    this.mood = params.value;
    this.imgForMood =
      'https://www.ag-grid.com/example-assets/smileys/' +
      (this.mood === 'Happy' ? 'happy.png' : 'sad.png');
  }

  ngOnInit(): void {
  }

}
