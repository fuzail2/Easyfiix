import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgcFormsModule, IgxBadgeModule, IgxSelectModule, IgxInputGroupModule, IgxButtonGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule } from 'igniteui-angular';
import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgcFormsModule, IgxBadgeModule, IgxSelectModule, IgxInputGroupModule, IgxButtonGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCardModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
