import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmintainaceblocklistComponent } from './viewmintainaceblocklist.component';

describe('ViewmintainaceblocklistComponent', () => {
  let component: ViewmintainaceblocklistComponent;
  let fixture: ComponentFixture<ViewmintainaceblocklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmintainaceblocklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmintainaceblocklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
