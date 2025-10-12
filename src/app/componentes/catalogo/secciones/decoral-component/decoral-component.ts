import { Component } from '@angular/core';
import { ProductGrid } from '../product-grid/product-grid';
import { DECORAL_DATA } from '../../product-data';

@Component({
  selector: 'app-decoral-component',
  imports: [ProductGrid],
  templateUrl: './decoral-component.html',
  styleUrl: './decoral-component.css'
})
export class DecoralComponent {
// 1. Variable de datos, que es directamente el array de Decoral
  decoralItems = DECORAL_DATA; 
  
  // 2. Texto introductorio (basado en la información provista)
  introText = {
    title: 'Borgert Decoral',
    subtitle: 'Acabados con Tecnología Italiana',
    description: 'Somos pioneros en el país con la primera planta de decorado de aluminio con tecnología y materia prima de origen italiano. Este proceso otorga al aluminio efectos visuales de alta calidad como madera, mármol y granito, comercializando actualmente 8 tonalidades de efecto madera.'
  };
}
