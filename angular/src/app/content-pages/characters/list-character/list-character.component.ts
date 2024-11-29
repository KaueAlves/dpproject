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

  columnsPlayer = [
    'Player',
    'Nome',
    'Vida',
    'Classe',
    'Nivel',
    'AC',
    'PROF',
    'PERC',
    'STR',
    'DEX',
    'CON',
    'INT',
    'WIS',
    'CHA',
    'AÇÕES'
  ];

  columnsNpc = [
    
    'Nome',
    'Vida',
    'Classe',
    'Nivel',
    'AC',
    'PROF',
    'PERC',
    'STR',
    'DEX',
    'CON',
    'INT',
    'WIS',
    'CHA',
    'Descrição'
  ];

  players: Player[] = [
    new Player({
      player: 'Murilo',
      name: 'Bruxa',
      classe: ['Bruxa'],
      nivel: [1],
      proficiency: 2,
      currentLife: 9,
      maxLife: 9,
      armorClass: 12,
      ability: {
        str: { value: 7, isSave: false },
        dex: { value: 13, isSave: true },
        con: { value: 12, isSave: false },
        int: { value: 15, isSave: false },
        wis: { value: 15, isSave: false },
        cha: { value: 19, isSave: true },
      },
    }),
    new Player({
      player: 'Chera',
      name: 'Slinx Hellbrand',
      classe: ['Guerreiro'],
      nivel: [1],
      proficiency: 2,
      currentLife: 12,
      maxLife: 12,
      armorClass: 10,
      ability: {
        str: { value: 15, isSave: true },
        dex: { value: 16, isSave: false },
        con: { value: 14, isSave: true },
        int: { value: 10, isSave: false },
        wis: { value: 6, isSave: false },
        cha: { value: 13, isSave: false },
      },
    }),
    new Player({
      player: 'Leandro',
      name: 'Hopper Quickfoot',
      classe: ['Bardo'],
      nivel: [1],
      proficiency: 2,
      currentLife: 11,
      maxLife: 11,
      armorClass: 15,
      ability: {
        str: { value: 8, isSave: false },
        dex: { value: 18, isSave: true },
        con: { value: 17, isSave: false },
        int: { value: 13, isSave: false },
        wis: { value: 14, isSave: false },
        cha: { value: 20, isSave: true },
      },
    }),
    new Player({
      player: 'Andrey',
      name: 'Zorath',
      classe: ['Monge'],
      nivel: [1],
      proficiency: 2,
      currentLife: 9,
      maxLife: 9,
      armorClass: 15,
      ability: {
        str: { value: 11, isSave: true },
        dex: { value: 16, isSave: true },
        con: { value: 12, isSave: false },
        int: { value: 11, isSave: false },
        wis: { value: 14, isSave: false },
        cha: { value: 12, isSave: false },
      },
    }),
    new Player({
      player: 'Luan',
      name: 'Flame Haze',
      classe: ['Guerreiro'],
      nivel: [1],
      proficiency: 2,
      currentLife: 12,
      maxLife: 12,
      armorClass: 17,
      ability: {
        str: { value: 14, isSave: true },
        dex: { value: 20, isSave: false },
        con: { value: 14, isSave: true },
        int: { value: 16, isSave: false },
        wis: { value: 14, isSave: false },
        cha: { value: 14, isSave: false },
      },
    }),
  ]

  npcs: Player[] = [
    new Player({
      player: 'Kauê',
      name: 'Mortar Cantis',
      classe: ['Ladino'],
      nivel: [1],
      proficiency: 2,
      currentLife: 13,
      maxLife: 13,
      armorClass: 15,
      description: "Cansado e Preparado, Humano Ladino",
      ability: {
        str: { value: 10, isSave: false },
        dex: { value: 20, isSave: true },
        con: { value: 14, isSave: false },
        int: { value: 16, isSave: true },
        wis: { value: 14, isSave: false },
        cha: { value: 12, isSave: false },
      },
    }),
    new Player({
      player: 'Kauê',
      name: 'Ferreiro Aiden',
      classe: ['Guerreiro'],
      nivel: [1],
      proficiency: 2,
      currentLife: 15,
      maxLife: 15,
      armorClass: 16,
      description: "Forte, Sério, Fire Genasi Guerreiro",
      ability: {
        str: { value: 20, isSave: true },
        dex: { value: 14, isSave: false },
        con: { value: 18, isSave: true },
        int: { value: 14, isSave: false },
        wis: { value: 16, isSave: false },
        cha: { value: 12, isSave: false },
      },
    }),
    new Player({
      player: 'Kauê',
      name: 'Taverneira Grizelda',
      classe: ['Maga'],
      nivel: [1],
      proficiency: 2,
      currentLife: 7,
      maxLife: 7,
      armorClass: 14,
      description: "Debochada, Bonita, Tiefling Maga",
      ability: {
        str: { value: 10, isSave: false },
        dex: { value: 14, isSave: false },
        con: { value: 14, isSave: false },
        int: { value: 20, isSave: true },
        wis: { value: 14, isSave: false },
        cha: { value: 18, isSave: true },
      },
    }),
    new Player({
      player: 'Kauê',
      name: 'Guarda Falkor',
      classe: ['Paladino'],
      nivel: [1],
      proficiency: 2,
      currentLife: 15,
      maxLife: 15,
      armorClass: 16,
      description: "Rancoroso, Forte, Goliath Paladino",
      ability: {
        str: { value: 20, isSave: true },
        dex: { value: 14, isSave: false },
        con: { value: 18, isSave: true },
        int: { value: 14, isSave: false },
        wis: { value: 16, isSave: true },
        cha: { value: 18, isSave: true },
      },
    }),
    new Player({
      player: 'Kauê',
      name: 'Mercadora Endora',
      classe: ['Caçadora'],
      nivel: [1],
      proficiency: 2,
      currentLife: 14,
      maxLife: 14,
      armorClass: 18,
      description: "Animada, Drogada, Hobbit Caçadora",
      ability: {
        str: { value: 14, isSave: false },
        dex: { value: 20, isSave: true },
        con: { value: 16, isSave: true },
        int: { value: 14, isSave: false },
        wis: { value: 18, isSave: true },
        cha: { value: 12, isSave: false },
      },
    }),
    new Player({
      player: 'Kauê',
      name: 'Atendente Lia',
      classe: ['Feiticeira'],
      nivel: [1],
      proficiency: 2,
      currentLife: 9,
      maxLife: 9,
      armorClass: 13,
      description: "Gentil, Confiante, Elfa Feiticeira",
      ability: {
        str: { value: 10, isSave: false },
        dex: { value: 16, isSave: false },
        con: { value: 14, isSave: false },
        int: { value: 14, isSave: true },
        wis: { value: 14, isSave: false },
        cha: { value: 20, isSave: true },
      },
    }),
  ];

  ngOnInit() {
 
  }

  editar(player: Player) {
    console.log(player);
  }
}
