import { Component, Input, inject } from '@angular/core';
import { Foto } from '../../models/foto.model'; 
import { GaleriaService } from '../../services/galeria';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-foto-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './foto-card.html',
  styleUrl: './foto-card.css',
})
export class FotoCard {
  @Input() foto!: Foto;

  iconLike = faHeart;
  iconEliminar = faTrash;

  public galeriaService = inject(GaleriaService);

  darLike() {
    this.galeriaService.darLike(this.foto.id);
  }

  eliminar() {
    this.galeriaService.eliminar(this.foto.id);
  }
}