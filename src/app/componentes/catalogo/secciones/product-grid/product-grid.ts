import { Component, Input } from '@angular/core';
import { ProductItem } from '../../product-data';

@Component({
  selector: 'app-product-grid',
  imports: [],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css'
})
export class ProductGrid {
  // @Input() recibe la lista de ítems a mostrar del componente padre
  @Input() items: ProductItem[] = []; 
}
