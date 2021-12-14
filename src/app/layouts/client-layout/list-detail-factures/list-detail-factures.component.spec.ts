import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailFacturesComponent } from './list-detail-factures.component';

describe('ListDetailFacturesComponent', () => {
  let component: ListDetailFacturesComponent;
  let fixture: ComponentFixture<ListDetailFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDetailFacturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
