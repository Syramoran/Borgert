import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Footer } from './componentes/footer/footer';
import { Whatsapp } from './componentes/whatsapp/whatsapp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FontAwesomeModule, Footer, Whatsapp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('borgert');


}
