import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { InfoEmpresa } from './info-empresa/info-empresa';
import { Servicios } from './servicios/servicios';
import { BorgertColor } from './borgert-color/borgert-color';
import { Preguntas } from './preguntas/preguntas';
import { Galeria } from './galeria/galeria';
import { Contacto } from '../contacto/contacto';

@Component({
  selector: 'app-inicio',
  imports: [Hero, InfoEmpresa, Servicios, BorgertColor, Preguntas, Galeria, Contacto],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

}
