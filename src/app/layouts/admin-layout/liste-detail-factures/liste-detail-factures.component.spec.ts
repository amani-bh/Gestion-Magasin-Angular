import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDetailFacturesComponent } from './liste-detail-factures.component';

describe('ListeDetailFacturesComponent', () => {
  let component: ListeDetailFacturesComponent;
  let fixture: ComponentFixture<ListeDetailFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDetailFacturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDetailFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
