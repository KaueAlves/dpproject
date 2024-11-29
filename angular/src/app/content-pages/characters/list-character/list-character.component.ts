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
    'Descrição'
  ];
  
  players: Player[] = [
    {
      player: 'Murilo',
      name: 'Bruxa',
      class: ['Bruxa'],
      nivel: [1],
      proficiency: 2,
      currentLife: 9,
      maxLife: 9,
      armorClass: 12,
      ability: {
        str: { value: 7, modifier: this.setModifier(7), isSave: false },
        dex: { value: 13, modifier: this.setModifier(13), isSave: true },
        con: { value: 12, modifier: this.setModifier(12), isSave: false },
        int: { value: 15, modifier: this.setModifier(15), isSave: false },
        wis: { value: 15, modifier: this.setModifier(15), isSave: false },
        cha: { value: 19, modifier: this.setModifier(19), isSave: true },
      }
    },
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
      armorClass: 15,
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
      currentLife: 9,
      maxLife: 9,
      armorClass: 15,
      ability: {
        str: { value: 11, modifier: this.setModifier(11), isSave: true },
        dex: { value: 16, modifier: this.setModifier(16), isSave: true },
        con: { value: 12, modifier: this.setModifier(12), isSave: false },
        int: { value: 11, modifier: this.setModifier(11), isSave: false },
        wis: { value: 14, modifier: this.setModifier(14), isSave: false },
        cha: { value: 12, modifier: this.setModifier(12), isSave: false },
      }
    },

    {
      player: 'Luan',
      name: 'Flame Haze',
      class: ['Guerreiro'],
      nivel: [1],
      proficiency: 2,
      currentLife: 12,
      maxLife: 12,
      armorClass: 17,
      ability: {
        str: { value: 14, modifier: this.setModifier(14), isSave: true },
        dex: { value: 20, modifier: this.setModifier(20), isSave: false },
        con: { value: 14, modifier: this.setModifier(14), isSave: true },
        int: { value: 16, modifier: this.setModifier(16), isSave: false },
        wis: { value: 14, modifier: this.setModifier(14), isSave: false },
        cha: { value: 14, modifier: this.setModifier(14), isSave: false },
      }
    },

  ]

  npcs: Player[] = [
    {
      player: 'Kauê',
      name: 'Mortar Cantis',
      class: ['Ladino'],
      nivel: [1],
      proficiency: 2,
      currentLife: 13,
      maxLife: 13,
      armorClass: 15,
      description: "Cansado e Preparado, Humano Ladino",
      ability: {
        str: { value: 10, modifier: this.setModifier(10), isSave: false }, 
        dex: { value: 20, modifier: this.setModifier(20), isSave: true },  
        con: { value: 14, modifier: this.setModifier(14), isSave: false }, 
        int: { value: 16, modifier: this.setModifier(16), isSave: true },  
        wis: { value: 14, modifier: this.setModifier(14), isSave: false }, 
        cha: { value: 12, modifier: this.setModifier(12), isSave: false }  
      }
    },
    {
      player: 'Kauê',
      name: 'Ferreiro Aiden',
      class: ['Guerreiro'],
      nivel: [1],
      proficiency: 2,
      currentLife: 15,
      maxLife: 15,
      armorClass: 16,
      description: "Forte, Sério, Fire Genasi Guerreiro",
      ability: {
        str: { value: 20, modifier: this.setModifier(20), isSave: true }, 
        dex: { value: 14, modifier: this.setModifier(14), isSave: false },
        con: { value: 18, modifier: this.setModifier(18), isSave: true }, 
        int: { value: 14, modifier: this.setModifier(14), isSave: false },
        wis: { value: 16, modifier: this.setModifier(16), isSave: false },
        cha: { value: 12, modifier: this.setModifier(12), isSave: false } 
      }
    },
    {
      player: 'Kauê',
      name: 'Taverneira Grizelda',
      class: ['Maga'],
      nivel: [1],
      proficiency: 2,
      currentLife: 7,
      maxLife: 7,
      armorClass: 14,
      description: "Debochada, Bonita, Tiefling Maga",
      ability: {
        str: { value: 10, modifier: this.setModifier(10), isSave: false }, 
        dex: { value: 14, modifier: this.setModifier(14), isSave: false }, 
        con: { value: 14, modifier: this.setModifier(14), isSave: false }, 
        int: { value: 20, modifier: this.setModifier(20), isSave: true },  
        wis: { value: 14, modifier: this.setModifier(14), isSave: false }, 
        cha: { value: 18, modifier: this.setModifier(18), isSave: true }   
      }
    },
    {
      player: 'Kauê',
      name: 'Guarda Falkor',
      class: ['Paladino'],
      nivel: [1],
      proficiency: 2,
      currentLife: 15,
      maxLife: 15,
      armorClass: 16,
      description: "Rancoroso, Forte, Goliath Paladino",
      ability: {
        str: { value: 20, modifier: this.setModifier(20), isSave: true },
        dex: { value: 14, modifier: this.setModifier(14), isSave: false },
        con: { value: 18, modifier: this.setModifier(18), isSave: true },
        int: { value: 14, modifier: this.setModifier(14), isSave: false }, 
        wis: { value: 16, modifier: this.setModifier(16), isSave: true }, 
        cha: { value: 18, modifier: this.setModifier(18), isSave: true }
      }
    },
    {
      player: 'Kauê',
      name: 'Mercadora Endora',
      class: ['Caçadora'],
      nivel: [1],
      proficiency: 2,
      currentLife: 14,
      maxLife: 14,
      armorClass: 18,
      description: "Animada, Drogada, Hobbit Caçadora",
      ability: {
        str: { value: 14, modifier: this.setModifier(14), isSave: false }, 
        dex: { value: 20, modifier: this.setModifier(20), isSave: true },  
        con: { value: 16, modifier: this.setModifier(16), isSave: true },  
        int: { value: 14, modifier: this.setModifier(14), isSave: false }, 
        wis: { value: 18, modifier: this.setModifier(18), isSave: true },  
        cha: { value: 12, modifier: this.setModifier(12), isSave: false }  
      }
    },
    {
      player: 'Kauê',
      name: 'Atendente Lia',
      class: ['Feiticeira'],
      nivel: [1],
      proficiency: 2,
      currentLife: 9,
      maxLife: 9,
      armorClass: 13,
      description: "Gentil, Confiante, Elfa Feiticeira",
      ability: {
        str: { value: 10, modifier: this.setModifier(10), isSave: false }, 
        dex: { value: 16, modifier: this.setModifier(16), isSave: false },
        con: { value: 14, modifier: this.setModifier(14), isSave: false }, 
        int: { value: 14, modifier: this.setModifier(14), isSave: true },  
        wis: { value: 14, modifier: this.setModifier(14), isSave: false }, 
        cha: { value: 20, modifier: this.setModifier(20), isSave: true }   
      }
    }
  ];

  ngOnInit() {
    this.setPerceptionScore(this.players);
    this.setPerceptionScore(this.npcs);
  }

  setPerceptionScore(entities: Player[]){
    entities.forEach(entity => {
      for (const abilityKey in entity.ability) {
        const ability = entity.ability[abilityKey as keyof typeof entity.ability];
        ability.saveModifier = ability.isSave ? this.setSaveModifier(ability.modifier, entity.proficiency) : 0;
      }
      entity.perception = entity?.ability?.wis?.modifier 
        ? entity.ability.wis.modifier + 10 + entity.proficiency 
        : 10 + entity.proficiency;
    });
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
