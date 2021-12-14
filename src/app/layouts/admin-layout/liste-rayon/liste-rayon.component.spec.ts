import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRayonComponent } from './liste-rayon.component';

describe('ListeRayonComponent', () => {
  let component: ListeRayonComponent;
  let fixture: ComponentFixture<ListeRayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
