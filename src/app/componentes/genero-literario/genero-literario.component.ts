import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { GeneroLiterario } from '../livro/livro';
import { LivroComponent } from '../livro/livro.component';

// PrimeNG imports
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-genero-literario',
  standalone: true,
  imports: [
    LivroComponent,
    CommonModule,
    CardModule,
    DividerModule
  ],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.scss'
})
export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>();

  // Get genre-specific background class
  getBackgroundClass(): string {
    return this.genero().id; // Retorna diretamente 'romance', 'misterio', etc.
  }

  // Get genre-specific border class
  getBorderClass(): string {
    return 'border-' + this.genero().id || 'border-gray-300';
  }
}
