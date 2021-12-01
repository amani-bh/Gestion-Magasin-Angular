import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeStocksComponent } from './liste-stocks.component';

describe('ListeStocksComponent', () => {
  let component: ListeStocksComponent;
  let fixture: ComponentFixture<ListeStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeStocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
