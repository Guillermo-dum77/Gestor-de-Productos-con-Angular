
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  producto: Product = { id: 0, nombre: '', precio: 0, descripcion: '' };
  editando = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    const id = route.snapshot.params['id'];
    if (id) {
      const productoExistente = productService.getById(+id);
      if (productoExistente) {
        this.producto = { ...productoExistente };
        this.editando = true;
      }
    }
  }

  guardar(): void {
    if (this.editando) {
      this.productService.update(this.producto);
    } else {
      this.productService.add(this.producto);
    }
    this.router.navigate(['/']);
  }
}
