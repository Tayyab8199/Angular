import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';

@Component({
  selector: 'app-cell-editor',
  templateUrl: './cell-editor.component.html',
  styleUrls: ['./cell-editor.component.css']
})
export class CellEditorComponent implements OnInit, ICellEditorAngularComp, AfterViewInit {
  private params: any;

  @ViewChild('container', { read: ViewContainerRef })
  public container!: ViewContainerRef;
  public happy = false;
  
  ngAfterViewInit() {
    window.setTimeout(() => {
      this.container.element.nativeElement.focus();
    });
  }

  agInit(params: any): void {
    this.params = params;
    this.setHappy(params.value === 'Happy');
  }

  getValue(): any {
    return this.happy ? 'Happy' : 'Sad';
  }

  isPopup(): boolean {
    return false;
  }

  setHappy(happy: boolean): void {
    this.happy = happy;
  }

  toggleMood(): void {
    this.setHappy(!this.happy);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onClick(happy: boolean) {
    this.setHappy(happy);
    this.params.api.stopEditing();
  }

  onKeyDown(event: any): void {
    const key = event.key;
    if (
      key === 'ArrowLeft' || // left
      key == 'ArrowRight'
    ) {
      // right
      this.toggleMood();
      event.stopPropagation();
    }
  }

}