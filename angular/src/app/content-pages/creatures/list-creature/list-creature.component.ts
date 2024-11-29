import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Creature } from '../../../shared/models/creature.model';
import { SkillLevel } from '../../../shared/models/skill.model';

@Component({
  selector: 'app-list-creature',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './list-creature.component.html',
  styleUrl: './list-creature.component.scss'
})
export class ListCreatureComponent {
  creatures: Creature[] = [
    new Creature({
      name: "Goblin",
      armorClass: 15,
      maxLife: 30,
      currentLife: 30,
      speed: 30,
      ability: {
        str: { value: 8, isSave: false },
        dex: { value: 14, isSave: true },
        con: { value: 12, isSave: false },
        int: { value: 10, isSave: false },
        wis: { value: 8, isSave: false },
        cha: { value: 8, isSave: false },
      },
      nivel: 1,
      exp: 50,
      descriptions: ["Small, sneaky humanoid"],
      actions: ["Slash with a rusty sword", "Dodge"],
      skills: [
        {
          name: 'Furtividade',
          ability: 'DEX',
          abilityMod: +6,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Ocultação'
        },
        {
          name: 'Intimidation',
          ability: 'CHA',
          abilityMod: 2,
          proficiency: SkillLevel.Untrained,
          proficiencyMod: 0,
          description: 'Testes de Intimidação'
        },
      ],
      senses: ["Darkvision 60ft"],
      languages: ["Common", "Goblin"],
    }),
  ];

  columnsCreatures = [
    'Nome',
    'AC',
    'Vida',
    'Speed',
    'STR',
    'DEX',
    'CON',
    'INT',
    'WIS',
    'CHA',
    'Skills',
    'Senses',
    'Languages',
    'Nivel',
    'Descrição',
    'Ações'
  ];

  getModifier(score: number) {
    return Math.floor((score - 10) / 2);
  }

  setSaveModifier(score: number | undefined, mod: number) {
    if (score || score == 0) {
      return score + mod;
    }
    return 0;
  }
}
