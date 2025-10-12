import { Component } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { from } from 'rxjs';
import { ANODIZADO_DATA, COLORES_DATA, ProductItem } from '../../product-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductGrid } from '../product-grid/product-grid';

@Component({
  selector: 'app-colores-component',
  imports: [FontAwesomeModule, ProductGrid],
  templateUrl: './colores-component.html',
  styleUrl: './colores-component.css'
})
export class ColoresComponent {
  faChevron = faChevronRight; 
  
  // 1. VARIABLE DE ESTADO: Controla qué pestaña está activa.
  currentSection: 'color' | 'anodizado' = 'color';

  // 2. VARIABLE DE DATOS: Contiene el array que se pasa a la grilla.
  // Inicialmente carga los datos de Pintura en Polvo.
  currentItems: ProductItem[] = COLORES_DATA; 

  // Textos para la intro (basados en la información provista)
  colorText = {
    title: 'Galería color',
    subtitle: 'Pintura en Polvo Termo-convertible',
    description: 'Contamos con una planta de esmaltado de perfiles de aluminio con pintura en polvo. Este proceso consiste en la aplicación de una pintura termo-convertible que se adhiere al aluminio, brindando resistencia al desgaste y una amplia gama de colores lisos y uniformes.' 
  };

  anodizadoText = {
    title: 'Anodizado',
    subtitle: 'Acabado de alta protección',
    description: 'El anodizado es un proceso electrolítico que permite crear capas de óxido de aluminio artificiales en la superficie del perfil con el fin de evitar que se corroa, entre otras cosas.' 
  };

  // Referencia al texto activo (inicialmente Colores)
  activeText = this.colorText; 

  constructor() {
    this.updateData();
  }

  /**
   * Cambia la sección activa y actualiza los datos y el texto.
   * @param sectionKey 'color' o 'anodizado'
   */
  selectSection(sectionKey: 'color' | 'anodizado'): void {
    this.currentSection = sectionKey;
    this.updateData();
  }

  /**
   * Determina qué array de datos y qué texto mostrar.
   */
  private updateData(): void {
    if (this.currentSection === 'color') {
      this.currentItems = COLORES_DATA;
      this.activeText = this.colorText;
    } else {
      this.currentItems = ANODIZADO_DATA;
      this.activeText = this.anodizadoText;
    }
  }
}
