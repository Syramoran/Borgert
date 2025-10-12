import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faLocationDot, 
  faPhone, 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons'; 
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

@Component({
  selector: 'app-contacto',
  imports: [FontAwesomeModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  public iconoUbicacion = faLocationDot; 
  public iconoTelefono = faPhone;
  public iconoCorreo = faEnvelope;
  public iconoFacebook = faSquareFacebook; 
  public iconoInstagram = faInstagram; 
}
