import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranportPageComponent } from './tranport-page.component';

describe('TranportPageComponent', () => {
  let component: TranportPageComponent;
  let fixture: ComponentFixture<TranportPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranportPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranportPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
