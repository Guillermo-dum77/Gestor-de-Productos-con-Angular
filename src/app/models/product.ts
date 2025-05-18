export interface Product {
  id: number;
  nombre: string;
  precio: number;
  descripcion?: string; // ← añade esta línea
}
