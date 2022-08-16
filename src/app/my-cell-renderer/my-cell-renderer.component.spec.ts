import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCellRendererComponent } from './my-cell-renderer.component';

describe('MyCellRendererComponent', () => {
  let component: MyCellRendererComponent;
  let fixture: ComponentFixture<MyCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCellRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
