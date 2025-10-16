import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faFacebook, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons'; 

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule, NgOptimizedImage],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
public faFacebook = faFacebook;
  public faInstagram = faInstagram;
}
