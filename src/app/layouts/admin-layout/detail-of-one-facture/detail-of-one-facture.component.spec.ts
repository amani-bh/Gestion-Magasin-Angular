import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOfOneFactureComponent } from './detail-of-one-facture.component';

describe('DetailOfOneFactureComponent', () => {
  let component: DetailOfOneFactureComponent;
  let fixture: ComponentFixture<DetailOfOneFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOfOneFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOfOneFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
