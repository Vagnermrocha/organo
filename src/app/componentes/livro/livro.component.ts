import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Livro } from './livro';

// PrimeNG imports
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.scss'
})
export class LivroComponent {
  livro = input.required<Livro>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }

  // Helper method to get border color based on genre
  getBorderClass(): string {
    return 'border-t-0'; // Remove the top border from the card
  }
  
  // New helper method to get the actual top border color
  getTopBorderColorClass(): string {
    const genreMap: Record<string, string> = {
      'romance': 'top-border-romance',
      'misterio': 'top-border-misterio',
      'fantasia': 'top-border-fantasia',
      'ficcao-cientifica': 'top-border-ficcao-cientifica',
      'tecnicos': 'top-border-tecnicos'
    };
    
    return genreMap[this.livro().genero.id] || 'bg-gray-300';
  }
}
