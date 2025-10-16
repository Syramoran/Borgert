import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiciosItems } from './servicios-items/servicios-items';

@Component({
  selector: 'app-catalogo',
  imports: [RouterModule, FormsModule,ServiciosItems],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class CatalogoComponent {
  urlColores: string = 'url(/aluminum-samples.jpeg)';
  urlDecoral: string = 'url(/fondo-decorado.jpg)';
  urlAberturas: string = 'url(/fondo-aberturas.jpg)';

  colorColores: string = '#1B347D';
  colorAberturas: string = '#B62D25';
  colorDecoral: string = '#e7d748ff';
}
