import { Ability } from "./ability.model";
import { Skill } from "./skill.model";

export class CharacterBase {
    [key: string]: any; // Propriedade para suportar chaves dinâmicas

    name: string;
    armorClass?: number;
    maxLife?: number;
    currentLife?: number;
    tempLife?: number;
    speed?: number;
    ability: Ability;
    skills?: Skill[];
    exp?: number;
    immunitysDamage?: string[];
    immunitysCondition?: string[];
    resistences?: string[];


    constructor(data: Partial<CharacterBase>) {
        this.name = data.name || '';
        this.armorClass = data.armorClass ;
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
        this.exp = data.exp || 0;
        this.immunitysDamage = data.immunitysDamage || [];
        this.immunitysCondition = data.immunitysDamage || [];
        this.resistences = data.resistences || [];
    }

    getModifier(ability: keyof Ability): number {
        const abilityValue = this.ability[ability]?.value;
        return Math.floor((abilityValue - 10) / 2);
    }

}
