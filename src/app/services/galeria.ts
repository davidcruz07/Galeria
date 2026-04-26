import { Injectable } from '@angular/core';
import { Foto } from '../models/foto.model'; 

@Injectable({
  providedIn: 'root',
})
export class GaleriaService {
  fotos: Foto[] = [];

  constructor() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const data = localStorage.getItem('fotos_galeria');
      this.fotos = data ? JSON.parse(data) : [];
    }
  }

  agregar(nuevaFoto: Foto) {
    this.fotos.push(nuevaFoto);
    this.guardar();
  }

  eliminar(id: number) {
    this.fotos = this.fotos.filter(f => f.id !== id);
    this.guardar();
  }

  darLike(id: number) {
    const foto = this.fotos.find(f => f.id === id);
    if (foto) {
      foto.likes++;
      this.guardar();
    }
  }

  get totalLikes(): number {
    return this.fotos.reduce((acc, foto) => acc + foto.likes, 0);
  }

  private guardar() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('fotos_galeria', JSON.stringify(this.fotos));
    }
  }
}