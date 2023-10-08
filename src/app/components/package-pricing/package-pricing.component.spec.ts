import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagePricingComponent } from './package-pricing.component';

describe('PackagePricingComponent', () => {
  let component: PackagePricingComponent;
  let fixture: ComponentFixture<PackagePricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagePricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
