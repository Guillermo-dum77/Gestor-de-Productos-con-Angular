import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly storageKey = 'productos';

  constructor() {
    // Inicializa si no hay datos aún
    if (!localStorage.getItem(this.storageKey)) {
      const ejemplo: Product[] = [
        { id: 1, nombre: 'Producto A', precio: 10, descripcion: 'Ejemplo A' },
        { id: 2, nombre: 'Producto B', precio: 20, descripcion: 'Ejemplo B' }
      ];
      this.saveToStorage(ejemplo);
    }
  }

  private saveToStorage(productos: Product[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(productos));
  }

  private getFromStorage(): Product[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  getAll(): Product[] {
    return this.getFromStorage();
  }

  getById(id: number): Product | undefined {
    return this.getFromStorage().find(p => p.id === id);
  }

  add(product: Product): void {
    const productos = this.getFromStorage();
    product.id = Date.now();
    productos.push(product);
    this.saveToStorage(productos);
  }

  update(product: Product): void {
    let productos = this.getFromStorage();
    productos = productos.map(p => (p.id === product.id ? product : p));
    this.saveToStorage(productos);
  }

  delete(id: number): void {
    let productos = this.getFromStorage();
    productos = productos.filter(p => p.id !== id);
    this.saveToStorage(productos);
  }
}
