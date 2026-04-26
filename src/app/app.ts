import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Formulario } from './components/formulario/formulario'
import { FotoCard } from './components/foto-card/foto-card'
import { GaleriaService} from './services/galeria'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    Formulario,
    FotoCard,
    FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
public galeriaService = inject(GaleriaService);

mostrarFormulario = false;

iconPlus = faPlus;
iconClose = faTimes;
  
toggleFormulario() {
  this.mostrarFormulario = !this.mostrarFormulario;
}

  title = 'galeria';
}
