import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Creature } from '../../../shared/models/creature.model';
import { SkillLevel } from '../../../shared/models/skill.model';

@Component({
  selector: 'app-list-creature',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-creature.component.html',
  styleUrl: './list-creature.component.scss'
})
export class ListCreatureComponent {

  columnsCreatures = [
    'Nome', 'AC', 'Vida', 'Speed', 'STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA', 'Skills', 'Imunidades', 'Resistências', 'Senses', 'Languages', 'Nivel', 'Descrição', 'Ações', 'Página'
  ];

  creatures: Creature[] = [
    new Creature({
      name: "Goblin",
      armorClass: 15,
      maxLife: 12,
      currentLife: 7,
      speed: 30,
      ability: {
        str: { value: 8, isSave: false },
        dex: { value: 14, isSave: false },
        con: { value: 12, isSave: false },
        int: { value: 10, isSave: false },
        wis: { value: 8, isSave: false },
        cha: { value: 8, isSave: false },
      },
      nivel: 0.25,
      exp: 50,
      descriptions: ["(Desingage e Hide) Bonus"],
      actions: ["Cimitarra +4 (1d6+2)", "Arco Curto +4 (1d6+2) (72/288) "],
      skills: [
        {
          name: 'Furtividade',
          ability: 'DEX',
          abilityMod: 6,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Ocultação'
        },
      ],
      senses: ["Darkvision 60ft", "Perception 9"],
      languages: ["Common", "Goblin"],
      page: 172,
    }),
    new Creature({
      name: "Lobo",
      armorClass: 13,
      maxLife: 18,
      currentLife: 11,
      speed: 40,
      ability: {
        str: { value: 12, isSave: false },
        dex: { value: 15, isSave: false },
        con: { value: 12, isSave: false },
        int: { value: 3, isSave: false },
        wis: { value: 12, isSave: false },
        cha: { value: 6, isSave: false },
      },
      nivel: 0.25,
      exp: 50,
      descriptions: ["Vantagem Perception (Audição e Olfato)","Vantagem ao atacar um mesmo alvo que um aliado melee"],
      actions: ["Mordida +4 (2d4+2) && Save STR DC11 -x> Caido."],
      skills: [
        {
          name: 'Percepção',
          ability: 'DEX',
          abilityMod: 3,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Ocultação'
        },
      ],
      senses: ["Perception 14"],
      languages: [],
      page: 333,
    }),
    new Creature({
      name: "Worg",
      armorClass: 13,
      maxLife: 44,
      currentLife: 26,
      speed: 40,
      ability: {
        str: { value: 16, isSave: false },
        dex: { value: 13, isSave: false },
        con: { value: 13, isSave: false },
        int: { value: 7, isSave: false },
        wis: { value: 11, isSave: false },
        cha: { value: 8, isSave: false },
      },
      nivel: 0.5,
      exp: 100,
      descriptions: ["Vantagem Perception (Audição e Olfato)"],
      actions: ["Mordida +5 (2d6+2) && Save STR DC13 -x> Caido."],
      skills: [
        {
          name: 'Percepção',
          ability: 'DEX',
          abilityMod: 4,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Ocultação'
        },
      ],
      senses: ["Darkvision 60ft","Perception 13"],
      languages: ["Goblin","Worg"],
      page: 341,
    }),
    new Creature({
      name: "Cultistas",
      armorClass: 12,
      maxLife: 16,
      currentLife: 9,
      speed: 30,
      ability: {
        str: { value: 11, isSave: false },
        dex: { value: 12, isSave: false },
        con: { value: 10, isSave: false },
        int: { value: 10, isSave: false },
        wis: { value: 11, isSave: false },
        cha: { value: 10, isSave: false },
      },
      nivel: 0.125,
      exp: 25,
      descriptions: [],
      actions: ["Cimitarra +3 (1d6+1)"],
      skills: [
        {
          name: 'Enganação',
          ability: 'CHA',
          abilityMod: 2,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Enganação'
        },
        {
          name: 'Religião',
          ability: 'INT',
          abilityMod: 2,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Religião'
        },
      ],
      senses: ["Vantagem em salvaguarda de Enfeitiçado ou Amendrontado", "Perception 10"],
      languages: ["Comum","_Escolha_"],
      page: 342,
    }),
    new Creature({
      name: "Acólito",
      armorClass: 10,
      maxLife: 16,
      currentLife: 9,
      speed: 30,
      ability: {
        str: { value: 10, isSave: false },
        dex: { value: 10, isSave: false },
        con: { value: 10, isSave: false },
        int: { value: 10, isSave: false },
        wis: { value: 14, isSave: false },
        cha: { value: 11, isSave: false },
      },
      nivel: 0.25,
      exp: 50,
      descriptions: ["C1(3) - Benção, Curar Ferimentos, Santuário"],
      actions:  ["Clava +2 (1d4)","Chama Sagrada","Luz"],
      skills: [
        {
          name: 'Medicina',
          ability: 'WIS',
          abilityMod: 4,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Enganação'
        },
        {
          name: 'Religião',
          ability: 'INT',
          abilityMod: 2,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Religião'
        },
      ],
      senses: ["Perception 12"],
      languages: ["Comum","_Escolha_"],
      page: 345,
    }),
    new Creature({
      name: "Esqueleto",
      armorClass: 13,
      maxLife: 20,
      currentLife: 13,
      speed: 30,
      ability: {
        str: { value: 10, isSave: false },
        dex: { value: 14, isSave: false },
        con: { value: 15, isSave: false },
        int: { value: 6, isSave: false },
        wis: { value: 8, isSave: false },
        cha: { value: 5, isSave: false },
      },
      nivel: 0.5,
      exp: 50,
      descriptions: [],
      actions:  ["Espada Curva +4 (1d6+2)","Arco Curto +4 (1d6+2) (72/288)"],
      skills: [
        {
          name: 'Medicina',
          ability: 'WIS',
          abilityMod: 4,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Enganação'
        },
        {
          name: 'Religião',
          ability: 'INT',
          abilityMod: 2,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Religião'
        },
      ],
      senses: ["Darkvision 60ft","Perception 9"],
      languages: ["Comum","_Escolha_"],
      page: 137,
    }),
    new Creature({
      name: "Lemure",
      armorClass: 7,
      maxLife: 24,
      currentLife: 13,
      speed: 15,
      ability: {
        str: { value: 10, isSave: false },
        dex: { value: 5, isSave: false },
        con: { value: 11, isSave: false },
        int: { value: 1, isSave: false },
        wis: { value: 11, isSave: false },
        cha: { value: 3, isSave: false },
      },
      nivel: 0.5,
      exp: 50,
      descriptions: [],
      actions:  ["Espada Curva +4 (1d6+2)","Arco Curto +4 (1d6+2) (72/288)"],
      skills: [
        {
          name: 'Medicina',
          ability: 'WIS',
          abilityMod: 4,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Enganação'
        },
        {
          name: 'Religião',
          ability: 'INT',
          abilityMod: 2,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Religião'
        },
      ],
      resistences: ["Gélido"],
      immunitysDamage: ["Ígneo","Venenoso"],
      immunitysCondition: ["Amedrontado, Enfeitiçado, Envenenado"],
      senses: ["Darkvision 120ft","Perception 10"],
      languages: ["Comum","_Escolha_"], 
      page: 76,
    }),
    new Creature({
      name: "Guarda",
      armorClass: 16,
      maxLife: 18,
      currentLife: 11,
      speed: 30,
      ability: {
        str: { value: 13, isSave: false },
        dex: { value: 12, isSave: false },
        con: { value: 12, isSave: false },
        int: { value: 10, isSave: false },
        wis: { value: 10, isSave: false },
        cha: { value: 10, isSave: false },
      },
      nivel: 0.125,
      exp: 25,
      descriptions: [],
      actions:  ["Lança +3 (1d6+1)(1d8+1)","Arco Curto +4 (1d6+2) (72/288)"],
      skills: [
        {
          name: 'Perception',
          ability: 'WIS',
          abilityMod: 2,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Enganação'
        },
     
      ],
      resistences: [],
      immunitysDamage: [],
      immunitysCondition: [],
      senses: ["Perception 12"],
      languages: ["_Escolha_"], 
      page: 347,
    }),
    new Creature({
      name: "Bandido",
      armorClass: 12,
      maxLife: 18,
      currentLife: 11,
      speed: 30,
      ability: {
        str: { value: 11, isSave: false },
        dex: { value: 12, isSave: false },
        con: { value: 12, isSave: false },
        int: { value: 10, isSave: false },
        wis: { value: 10, isSave: false },
        cha: { value: 10, isSave: false },
      },
      nivel: 0.125,
      exp: 25,
      descriptions: [],
      actions:  ["Cimitarra +3 (1d6+1)","Besta Leve +3 (1d8+1) (80/320)"],
      skills: [
        {
          name: 'Perception',
          ability: 'WIS',
          abilityMod: 2,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Enganação'
        },
     
      ],
      resistences: [],
      immunitysDamage: [],
      immunitysCondition: [],
      senses: ["Perception 12"],
      languages: ["_Escolha_"], 
      page: 344,
    }),
  ];

  getModifier(score: number) {
    return Math.floor((score - 10) / 2);
  }

  setSaveModifier(score: number | undefined, mod: number) {
    return score !== undefined ? score + mod : 0;
  }

  editar(creature: Creature) {
    console.log(creature);
  }
}
