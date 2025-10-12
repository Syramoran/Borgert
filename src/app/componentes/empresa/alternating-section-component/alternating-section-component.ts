import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alternating-section-component',
  imports: [CommonModule],
  templateUrl: './alternating-section-component.html',
  styleUrl: './alternating-section-component.css'
})
export class AlternatingSectionComponent {
// Entradas (Inputs) para el contenido del componente
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() imageSrc: string = '';
  
  // Input para controlar la inversión del layout (true = inverso)
  @Input() isInverse: boolean = false; 

  @Input() textColor: string = '#000000'; // Negro (Default institucional)
  @Input() backgroundColor: string = '#FFFFFF'; // Blanco (Default institucional)

  constructor() { }

  /**
   * Getter para determinar qué clases CSS aplicar.
   * Si isInverse es true, añade la clase 'seccion-inversa'.
   */
  get sectionClass(): string {
    return this.isInverse ? 'seccion seccion-inversa' : 'seccion';
  }
}
