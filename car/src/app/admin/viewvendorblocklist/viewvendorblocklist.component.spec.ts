import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvendorblocklistComponent } from './viewvendorblocklist.component';

describe('ViewvendorblocklistComponent', () => {
  let component: ViewvendorblocklistComponent;
  let fixture: ComponentFixture<ViewvendorblocklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewvendorblocklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewvendorblocklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
