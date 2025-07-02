import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { livros } from '../../mock-livros';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';
import { GeneroLiterario, Livro } from '../livro/livro';

// PrimeNG imports
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [
    CommonModule,
    GeneroLiterarioComponent,
    CardModule,
    DividerModule
  ],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.scss'
})
export class ListaLivrosComponent implements OnInit {
  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();

  ngOnInit(): void {
    this.livrosPorGenero = new Map();

    livros.forEach((livro) => {
      const generoId = livro.genero.id
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, [])
      }
      this.livrosPorGenero.get(generoId)?.push(livro)
    })

    this.generos = [
      {
        id: 'romance',
        value: "Romance",
        livros: this.livrosPorGenero.get("romance") ?? []
      },
      {
        id: 'misterio',
        value: 'Mistério',
        livros: this.livrosPorGenero.get("misterio") ?? []
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livrosPorGenero.get("fantasia") ?? []
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        livros: this.livrosPorGenero.get("ficcao-cientifica") ?? []
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        livros: this.livrosPorGenero.get("tecnicos") ?? []
      },
    ]
  }
}
