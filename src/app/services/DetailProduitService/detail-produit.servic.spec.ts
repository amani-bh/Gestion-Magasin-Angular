import { TestBed } from '@angular/core/testing';

import { DetailProduitService } from './detail-produit.service';

describe('DetailProduitService', () => {
  let service: DetailProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
