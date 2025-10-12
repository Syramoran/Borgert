import { Component, OnInit } from '@angular/core';
import { CATEGORIES_MAP, CategoryDetails, LINEAS_DATA, ProductItem } from '../../../product-data';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductGrid } from '../../product-grid/product-grid';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-abertura-detalle-component',
  imports: [CommonModule, ProductGrid, FormsModule],
  templateUrl: './abertura-detalle-component.html',
  styleUrl: './abertura-detalle-component.css'
})
export class AberturaDetalleComponent implements OnInit {
  categoriaId: string = ''; // Ej: 'puertas'
  categoryData: CategoryDetails | undefined;
  
  // Menús y Filtros
  subcategories: string[] = [];
  lines: string[] = LINEAS_DATA;
  
  // Variables de Estado de la Vista
  currentSubcategory: string = '';
  currentFilterLine: string = 'Todas';

  // Array final para la grilla
  filteredItems: ProductItem[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Suscripción al cambio de parámetros de la ruta.
    // Esto asegura que si el usuario navega de /aberturas/puertas a /aberturas/ventanas,
    // la vista se actualice sin recargar el componente.
    this.route.paramMap.subscribe((params: ParamMap) => {
        
        // 1. Obtener el parámetro ':categoria' (ej. 'puertas')
        this.categoriaId = params.get('categoria') || '';
        
        // 2. Cargar los datos específicos usando el Mapeo
        this.categoryData = CATEGORIES_MAP[this.categoriaId];
        
        if (this.categoryData) {
            // 3. Inicializar menús y filtros
            this.subcategories = this.categoryData.subcategories;
            
            // Establecer la primera subcategoría como activa por defecto
            this.currentSubcategory = this.subcategories.length > 0 ? this.subcategories[0] : '';
            this.currentFilterLine = 'Todas';
            
            // 4. Aplicar filtros iniciales
            this.applyFilters();
        } else {
            // Manejar caso de URL no válida (ej. /aberturas/inexistente)
            this.filteredItems = []; 
        }
    });
  }
  
  /**
   * Cambia la subcategoría activa y re-aplica los filtros.
   */
  selectSubcategory(subcategory: string): void {
    this.currentSubcategory = subcategory;
    this.applyFilters();
  }

  /**
   * Cambia la línea de filtro activa y re-aplica los filtros.
   */
  selectFilterLine(line: string): void {
    this.currentFilterLine = line;
    this.applyFilters();
  }

  /**
   * Lógica central de filtrado: aplica Subcategoría Y Línea al array maestro.
   */
  applyFilters(): void {
    if (!this.categoryData) {
      this.filteredItems = [];
      return;
    }
    
    let tempItems = this.categoryData.productItems;

    // 1. Filtrar por Subcategoría (si la categoría tiene subcategorías)
    if (this.currentSubcategory) {
        tempItems = tempItems.filter(item => item.subcategory === this.currentSubcategory);
    }
    
    // 2. Filtrar por Línea (si se seleccionó una línea específica)
    if (this.currentFilterLine !== 'Todas') {
        tempItems = tempItems.filter(item => item.linea === this.currentFilterLine);
    }
    
    this.filteredItems = tempItems;
  }
}
