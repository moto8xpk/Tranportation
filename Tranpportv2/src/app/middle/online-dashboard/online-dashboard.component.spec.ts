import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDashboardComponent } from './online-dashboard.component';

describe('OnlineDashboardComponent', () => {
  let component: OnlineDashboardComponent;
  let fixture: ComponentFixture<OnlineDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
