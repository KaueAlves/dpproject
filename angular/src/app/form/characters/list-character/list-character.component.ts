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
    'Força',
    'Destreza',
    'Consituição',
    'Inteligência',
    'Sabedoria',
    'Carisma'
  ];

  players: Player[] = [
    {
      player: 'Chera',
      name: 'Slinx Hellbrand',
      class: ['Fighter'],
      nivel: [1],
      proficiency: 2,
      currentLife: 12,
      maxLife: 12,
      ability: {
        str: { value: 15, isSave: true },
        dex: { value: 16, isSave: false },
        con: { value: 14, isSave: true },
        int: { value: 10, isSave: false },
        wis: { value: 6, isSave: false },
        cha: { value: 13, isSave: false },
      }
    },
    {
      player: 'Leandrão',
      name: 'Hopper Quickfoot',
      class: ['Bard'],
      nivel: [1],
      proficiency: 2,
      currentLife: 11,
      maxLife: 11,
      ability: {
        str: { value: 8, isSave: false },
        dex: { value: 18, isSave: true },
        con: { value: 17, isSave: false },
        int: { value: 13, isSave: false },
        wis: { value: 14, isSave: false },
        cha: { value: 20, isSave: true },
      }
    }
  ]

  ngOnInit(){
    this.players.forEach(player =>{
      for (const abilityKey in player.ability){
        const ability = player.ability[abilityKey as keyof typeof  player.ability];
        ability.modifier = this.setModifier(ability.value);
        ability.saveModifier = this.setSaveModifier(ability.modifier,player.proficiency)
      }
    })
  }

  setModifier(score: number) {
    return Math.floor((score - 10) / 2);
  }

  setSaveModifier(score:number | undefined, mod:number){
    if(score){
      return score + mod;
    }
    return 0;
  }
}
