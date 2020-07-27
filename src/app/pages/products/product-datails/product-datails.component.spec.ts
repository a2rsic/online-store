import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDatailsComponent } from './product-datails.component';

describe('ProductDatailsComponent', () => {
  let component: ProductDatailsComponent;
  let fixture: ComponentFixture<ProductDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
