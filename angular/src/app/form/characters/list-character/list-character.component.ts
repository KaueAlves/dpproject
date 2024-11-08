import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../../shared/models/player.model';

@Component({
  selector: 'app-list-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-character.component.html',
  styleUrl: './list-character.component.scss'
})
export class ListCharacterComponent {

  columns = {
    player: 'Player',
    nome: 'Nome',
    classe: 'Classe',
    nivel: 'Nivel',
    forca: 'Força',
    destreza: 'Destreza',
    consituicao: 'Consituição',
    inteligencia: 'Inteligência',
    sabedoria: 'Sabedoria',
    carisma: 'Carisma'
  };
  columnsKeys = Object.keys(this.columns);
 
  players: Player[] = [
    {
      player: 'Chera',
      nome: 'Slinx Hellbrand',
      classe: 'Fighter',
      nivel: '1',
      forca: '15(+2)',
      destreza: '16(+3)',
      consituicao: '14(+2)',
      inteligencia: '10(+0)',
      sabedoria: '6(-2)',
      carisma: '13(+1)'
    },
    {
      player: 'Teste',
      nome: 'teste',
      classe: 'Fighter',
      nivel: '1',
      forca: '15(+2)',
      destreza: '16(+3)',
      consituicao: '14(+2)',
      inteligencia: '10(+0)',
      sabedoria: '6(-2)',
      carisma: '13(+1)'
    }
  ]
}
