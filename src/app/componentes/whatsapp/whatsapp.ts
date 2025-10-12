import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-whatsapp',
  imports: [FontAwesomeModule],
  templateUrl: './whatsapp.html',
  styleUrl: './whatsapp.css'
})
export class Whatsapp {
  public faWhatsapp = faWhatsapp;
}
