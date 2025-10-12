import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-galeria',
  imports: [FontAwesomeModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria {
  // Variable de estado para controlar si el modal está abierto o cerrado
  isModalOpen: boolean = false;
faClose = faCircleXmark;
  
  // Variable para almacenar la URL de la imagen que se debe mostrar
  currentImageUrl: string = '';

  /**
   * Abre el modal y establece la URL de la imagen seleccionada.
   * @param imageUrl La URL de la imagen clicada.
   */
  openModal(imageUrl: string): void {
    this.currentImageUrl = imageUrl;
    this.isModalOpen = true;
    // Opcional: Deshabilitar el scroll del cuerpo de la página cuando el modal está abierto
    document.body.style.overflow = 'hidden'; 
  }

  /**
   * Cierra el modal y limpia el estado.
   */
  closeModal(): void {
    this.isModalOpen = false;
    this.currentImageUrl = '';
    // Opcional: Restaurar el scroll del cuerpo de la página
    document.body.style.overflow = 'auto'; 
  }

}
