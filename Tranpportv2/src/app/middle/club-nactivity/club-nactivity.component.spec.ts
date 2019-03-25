import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubNActivityComponent } from './club-nactivity.component';

describe('ClubNActivityComponent', () => {
  let component: ClubNActivityComponent;
  let fixture: ComponentFixture<ClubNActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubNActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubNActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
