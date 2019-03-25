import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDuplicatedAcitivityComponent } from './edit-duplicated-acitivity.component';

describe('EditDuplicatedAcitivityComponent', () => {
  let component: EditDuplicatedAcitivityComponent;
  let fixture: ComponentFixture<EditDuplicatedAcitivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDuplicatedAcitivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDuplicatedAcitivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
