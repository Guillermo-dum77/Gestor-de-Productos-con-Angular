import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { By } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // en caso de otros componentes desconocidos
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;

    // Simulamos productos
    component.productos = [
      { id: 1, nombre: 'Producto A', precio: 100 },
      { id: 2, nombre: 'Producto B', precio: 200 }
    ];

    fixture.detectChanges(); // Aplica los cambios al DOM
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar 2 productos en la vista', () => {
    const elementos = fixture.debugElement.queryAll(By.css('mat-card-title'));
    expect(elementos.length).toBe(2);
    expect(elementos[0].nativeElement.textContent).toContain('Producto A');
    expect(elementos[1].nativeElement.textContent).toContain('Producto B');
  });
});
