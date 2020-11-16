import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionReviewsComponent } from './production-reviews.component';

describe('ProductionReviewsComponent', () => {
  let component: ProductionReviewsComponent;
  let fixture: ComponentFixture<ProductionReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
