import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailProduitComponent } from './update-detail-produit.component';

describe('UpdateDetailProduitComponent', () => {
  let component: UpdateDetailProduitComponent;
  let fixture: ComponentFixture<UpdateDetailProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDetailProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDetailProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
