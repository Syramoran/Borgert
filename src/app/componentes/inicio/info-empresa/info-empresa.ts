import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

@Component({
  selector: 'app-info-empresa',
  imports: [FontAwesomeModule,NgOptimizedImage],
  templateUrl: './info-empresa.html',
  styleUrl: './info-empresa.css'
})
export class InfoEmpresa {
public iconoFacebook = faSquareFacebook; 
  public iconoInstagram = faInstagram; 
}
