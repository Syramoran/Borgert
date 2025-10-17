import { Component } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  imports: [],
  templateUrl: './preguntas.html',
  styleUrl: './preguntas.css'
})
export class Preguntas {
   // Mantiene el índice del elemento activo, si lo hay.
  activeIndex: number | null = null;

  // Los datos del acordeón. Podrían venir de un servicio.
  faqItems = [
    {
      question: '¿Qué tipos de acabados ofrecen para las aberturas de aluminio?',
      answer: 'Ofrecemos diferentes tipos de acabados: esmaltado en polvo (Borgert Color), decorado efecto madera (Borgert Decoral) y anodizado en distintas tonalidades, texturas y protección según la necesidad del proyecto.'
    },
    {
      question: '¿Realizan envíos a todo el país?',
      answer: 'Sí, realizamos envíos a todo el territorio nacional a través de transportistas confiables para asegurar que su pedido llegue en perfectas condiciones.'
    },
    {
      question: '¿Ofrecen servicio de colocación?',
      answer: 'Sí, ofrecemos el servicio de colocación de aberturas de aluminio. Adicionalmente, brindamos asesoramiento técnico y relevamiento en obras, terminaciones adicionales, adaptación de aberturas a medida, reparación y mantenimiento.'
    },
    {
      question: '¿Dónde puedo ver sus productos?',
      answer: 'Puede visitar nuestro salón de exposición y ventas ubicado en nuestra sucursal de Paraná, en Av. Churruarín 55, o explorar nuestro catálogo completo en línea.'
    }
  ];

  /**
   * Alterna la visibilidad de una respuesta.
   * @param index El índice del elemento en el array.
   */
  toggleAnswer(index: number): void {
    // Si el elemento ya está abierto, lo cierra (lo establece a null).
    // Si no, lo abre (establece el índice como activo).
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
