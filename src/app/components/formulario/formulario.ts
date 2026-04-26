import { Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { GaleriaService } from '../../services/galeria';



@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  private galeriaService = inject(GaleriaService);


  titulo: string = '';
  url: string = '';

  guardar() {
    if (this.titulo.trim() && this.url.trim()) {
      this.galeriaService.agregar({
        id: Date.now(),
        titulo: this.titulo,
        url: this.url,
        likes: 0
      });

      this.titulo = '';
      this.url = '';
    } else {
      alert('Por favor, llena ambos campos');
    }
  }
}
