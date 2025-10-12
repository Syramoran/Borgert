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
      answer: 'Ofrecemos una amplia gama de acabados, incluyendo anodizado, lacado y una variedad de colores RAL para satisfacer cualquier necesidad de diseño y durabilidad.'
    },
    {
      question: '¿Realizan envíos a todo el país?',
      answer: 'Sí, realizamos envíos a todo el territorio nacional a través de transportistas confiables para asegurar que su pedido llegue en perfectas condiciones.'
    },
    {
      question: '¿Ofrecen servicio de colocación?',
      answer: 'No, por el momento no ofrecemos servicio de colocación. Sin embargo, podemos recomendarle instaladores certificados en su zona para garantizar una instalación profesional.'
    },
    {
      question: '¿Dónde puedo ver sus productos?',
      answer: 'Puede visitar nuestro showroom principal ubicado en [Dirección de la tienda] o explorar nuestro catálogo completo en línea.'
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
