import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencilAlt, faPlusCircle, faUsers, faWrench, faStar } from '@fortawesome/free-solid-svg-icons';

// Interfaz simple para los datos de los servicios
interface Servicio {
  nombre: string;
  icono: any; // El tipo 'any' acepta el objeto IconDefinition de Font Awesome
}


@Component({
  selector: 'app-servicios-items',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './servicios-items.html',
  styleUrl: './servicios-items.css'
})
export class ServiciosItems {
// 1. Definición de los íconos (similares a los que definiste para Contacto)
  // Aquí se mapean los objetos de ícono importados a propiedades del componente
  public faIconos = {
    asesoramiento: faPencilAlt,
    colocacion: faPlusCircle,
    adaptacion: faUsers,
    reparacion: faWrench,
    postventa: faStar
  };

  // 2. Datos de los servicios usando los objetos de ícono
  servicios: Servicio[] = [
    { 
      nombre: 'Asesoramiento y medición sin cargo', 
      icono: this.faIconos.asesoramiento
    },
    { 
      nombre: 'Colocación y terminaciones adicionales', 
      icono: this.faIconos.colocacion
    },
    { 
      nombre: 'Adaptación de aberturas a la necesidad del cliente', 
      icono: this.faIconos.adaptacion
    },
    { 
      nombre: 'Reparación y mantenimiento', 
      icono: this.faIconos.reparacion
    },
    { 
      nombre: 'Servicio post venta', 
      icono: this.faIconos.postventa
    },
  ];
}
