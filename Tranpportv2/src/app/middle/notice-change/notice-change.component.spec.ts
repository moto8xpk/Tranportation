import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeChangeComponent } from './notice-change.component';

describe('NoticeChangeComponent', () => {
  let component: NoticeChangeComponent;
  let fixture: ComponentFixture<NoticeChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
