import { Skill } from "./skill.model";
import { Ability } from "./ability.model";

export class Creature {
    [key: string]: any; // Propriedade para suportar chaves dinâmicas

    name: string;
    armorClass?: number;
    maxLife?: number;
    currentLife?: number;
    tempLife?: number;
    speed?: number;
    ability: Ability;
    skills?: Skill[];
    senses?: string[];
    languages?: string[];
    nivel: number;
    exp: number;
    descriptions?: string[];
    actions?: string[];

    constructor(data: Partial<Creature>) {
        this.name = data.name || '';
        this.armorClass = data.armorClass;
        this.maxLife = data.maxLife;
        this.currentLife = data.currentLife;
        this.tempLife = data.tempLife;
        this.speed = data.speed;
        this.ability = data.ability || {
            str: { value: 10, isSave: false },
            dex: { value: 10, isSave: false },
            con: { value: 10, isSave: false },
            int: { value: 10, isSave: false },
            wis: { value: 10, isSave: false },
            cha: { value: 10, isSave: false },
        };
        this.skills = data.skills || [];
        this.senses = data.senses || [];
        this.languages = data.languages || [];
        this.nivel = data.nivel || 1;
        this.exp = data.exp || 0;
        this.descriptions = data.descriptions || [];
        this.actions = data.actions || [];
    }

    getModifier(ability: keyof Ability): number {
        const abilityValue = this.ability[ability]?.value;
        return Math.floor((abilityValue - 10) / 2);
    }

    getSaveModifier(ability: keyof Ability): number {
        return this.ability[ability]?.isSave
            ? this.getModifier(ability) + this.nivel
            : this.getModifier(ability);
    }
}

