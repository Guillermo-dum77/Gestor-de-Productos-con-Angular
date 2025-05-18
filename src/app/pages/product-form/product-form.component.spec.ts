import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductFormComponent } from './product-form.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductFormComponent', () => {
  let component: ProductFormComponent;
  let fixture: ComponentFixture<ProductFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductFormComponent],
      imports: [
        FormsModule,
        RouterTestingModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: {} } }
        },
        {
          provide: ProductService,
          useValue: {
            getById: () => null,
            add: () => {},
            update: () => {}
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
