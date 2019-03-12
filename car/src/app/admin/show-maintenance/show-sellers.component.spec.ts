import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSellersComponent } from './show-sellers.component';

describe('ShowSellersComponent', () => {
  let component: ShowSellersComponent;
  let fixture: ComponentFixture<ShowSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
