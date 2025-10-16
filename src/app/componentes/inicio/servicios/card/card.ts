import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() titulo: string = '';
  @Input() texto: string = '';
  @Input() imagenUrl: string = '';
  @Input() botonUrl: string = '#';
  @Input() botonTexto: string = '';
}
