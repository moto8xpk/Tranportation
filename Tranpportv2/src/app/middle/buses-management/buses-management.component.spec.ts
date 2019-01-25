import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusesManagementComponent } from './buses-management.component';

describe('BusesManagementComponent', () => {
  let component: BusesManagementComponent;
  let fixture: ComponentFixture<BusesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
