import { Component } from '@angular/core';
import { ABERTURAS_CATEGORIES_DATA } from '../../product-data';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductGrid } from '../product-grid/product-grid';

@Component({
  selector: 'app-aberturas-component',
  imports: [RouterLink, CommonModule],
  templateUrl: './aberturas-component.html',
  styleUrl: './aberturas-component.css'
})
export class AberturasComponent {
  aberturasCategories = ABERTURAS_CATEGORIES_DATA; 
  
  introText = {
    title: 'CATEGORÍAS',
    description: 'Explore la amplia variedad de diseños, estilos y líneas de Borgert y Cía.'
  };
}
