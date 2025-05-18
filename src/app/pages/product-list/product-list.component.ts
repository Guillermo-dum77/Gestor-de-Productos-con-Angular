
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ]
})
export class ProductListComponent implements OnInit {
  productos: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productos = this.productService.getAll();
  }

  editar(id: number): void {
    this.router.navigate(['/editar', id]);
  }

  eliminar(id: number): void {
    this.productService.delete(id);
    this.productos = this.productService.getAll(); // Refresca la lista
  }
}
