import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvendorwaitinglistComponent } from './viewvendorwaitinglist.component';

describe('ViewvendorwaitinglistComponent', () => {
  let component: ViewvendorwaitinglistComponent;
  let fixture: ComponentFixture<ViewvendorwaitinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvendorwaitinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvendorwaitinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
