import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDetailProduitComponent } from './liste-detail-produit.component';

describe('ListeDetailProduitComponent', () => {
  let component: ListeDetailProduitComponent;
  let fixture: ComponentFixture<ListeDetailProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDetailProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDetailProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
