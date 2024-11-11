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

  columns = [
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

  players: Player[] = [
    {
      player: 'Chera',
      name: 'Slinx Hellbrand',
      class: ['Guerreiro'],
      nivel: [1],
      proficiency: 2,
      currentLife: 12,
      maxLife: 12,
      armorClass: 10,
      ability: {
        str: { value: 15, modifier: this.setModifier(15), isSave: true },
        dex: { value: 16, modifier: this.setModifier(16), isSave: false },
        con: { value: 14, modifier: this.setModifier(14), isSave: true },
        int: { value: 10, modifier: this.setModifier(10), isSave: false },
        wis: { value: 6, modifier: this.setModifier(6), isSave: false },
        cha: { value: 13, modifier: this.setModifier(13), isSave: false },
      }
    },
    {
      player: 'Leandro',
      name: 'Hopper Quickfoot',
      class: ['Bardo'],
      nivel: [1],
      proficiency: 2,
      currentLife: 11,
      maxLife: 11,
      armorClass: 10,
      ability: {
        str: { value: 8, modifier: this.setModifier(8), isSave: false },
        dex: { value: 18, modifier: this.setModifier(18), isSave: true },
        con: { value: 17, modifier: this.setModifier(17), isSave: false },
        int: { value: 13, modifier: this.setModifier(13), isSave: false },
        wis: { value: 14, modifier: this.setModifier(14), isSave: false },
        cha: { value: 20, modifier: this.setModifier(20), isSave: true },
      }
    },
    {
      player: 'Andrey',
      name: 'Zorath',
      class: ['Monge'],
      nivel: [1],
      proficiency: 2,
      currentLife: 10,
      maxLife: 10,
      armorClass: 10,
      ability: {
        str: { value: 10, modifier: this.setModifier(10), isSave: false },
        dex: { value: 10, modifier: this.setModifier(10), isSave: true },
        con: { value: 10, modifier: this.setModifier(10), isSave: false },
        int: { value: 10, modifier: this.setModifier(10), isSave: false },
        wis: { value: 10, modifier: this.setModifier(10), isSave: false },
        cha: { value: 10, modifier: this.setModifier(10), isSave: true },
      }
    },
    {
      player: 'Murilo',
      name: 'Bruxa',
      class: ['Bruxa'],
      nivel: [1],
      proficiency: 2,
      currentLife: 10,
      maxLife: 10,
      armorClass: 10,
      ability: {
        str: { value: 10, modifier: this.setModifier(10), isSave: false },
        dex: { value: 10, modifier: this.setModifier(10), isSave: true },
        con: { value: 10, modifier: this.setModifier(10), isSave: false },
        int: { value: 10, modifier: this.setModifier(10), isSave: false },
        wis: { value: 10, modifier: this.setModifier(10), isSave: false },
        cha: { value: 10, modifier: this.setModifier(10), isSave: true },
      }
    },
    {
      player: 'Luan',
      name: 'Flame Haze',
      class: ['Guerreiro'],
      nivel: [1],
      proficiency: 2,
      currentLife: 10,
      maxLife: 10,
      armorClass: 10,
      ability: {
        str: { value: 17, modifier: this.setModifier(17), isSave: false },
        dex: { value: 15, modifier: this.setModifier(15), isSave: true },
        con: { value: 14, modifier: this.setModifier(14), isSave: false },
        int: { value: 14, modifier: this.setModifier(14), isSave: false },
        wis: { value: 14, modifier: this.setModifier(14), isSave: false },
        cha: { value: 14, modifier: this.setModifier(14), isSave: true },
      }
    },
    {
      player: 'Kauê',
      name: 'Mortar Cantis',
      class: ['Ladino'],
      nivel: [1],
      proficiency: 2,
      currentLife: 10,
      maxLife: 10,
      armorClass: 10,
      ability: {
        str: { value: 10, modifier: this.setModifier(10), isSave: false },
        dex: { value: 15, modifier: this.setModifier(15), isSave: true },
        con: { value: 16, modifier: this.setModifier(16), isSave: false },
        int: { value: 11, modifier: this.setModifier(11), isSave: true },
        wis: { value: 12, modifier: this.setModifier(12), isSave: false },
        cha: { value: 10, modifier: this.setModifier(10), isSave: false },
      }
    }
  ]

  ngOnInit() {
    this.players.forEach(player => {
      for (const abilityKey in player.ability) {
        const ability = player.ability[abilityKey as keyof typeof player.ability];
        ability.saveModifier = ability.isSave ?  this.setSaveModifier(ability.modifier, player.proficiency) : 0;        
      }
      player.perception = player.ability.wis.modifier + 10 + player.proficiency;
    })
  }

  setModifier(score: number) {
    return Math.floor((score - 10) / 2);
  }

  setSaveModifier(score: number | undefined, mod: number) {
    if (score || score == 0) {
      return score + mod;
    }
    return 0;
  }

  editar(player: Player) {
    console.log(player);
  }
}
