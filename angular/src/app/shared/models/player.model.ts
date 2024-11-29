import { Skill } from "./skill.model";
import { Ability } from "./ability.model";
export class Player {
    [key: string]: any;

    player: string;
    name: string;
    class: string[];
    nivel: number[];
    description?: string;
    armorClass?: number;
    speed?: number;
    currentLife?: number;
    maxLife?: number;
    tempLife?: number;
    iniciative?: number;
    proficiency: number;
    perception?: number;
    ability: Ability;
    skills?: Skill[];

    constructor(data: Partial<Player>) {
        this.player = data.player || '';
        this.name = data.name || '';
        this.class = data.class || [];
        this.nivel = data.nivel || [];
        this.description = data.description;
        this.armorClass = data.armorClass;
        this.speed = data.speed;
        this.currentLife = data.currentLife;
        this.maxLife = data.maxLife;
        this.tempLife = data.tempLife;
        this.iniciative = data.iniciative;
        this.proficiency = data.proficiency || 0;
        this.perception = data.perception;
        this.ability = data.ability || {
            str: { value: 10, isSave: false },
            dex: { value: 10, isSave: false },
            con: { value: 10, isSave: false },
            int: { value: 10, isSave: true },
            wis: { value: 10, isSave: false },
            cha: { value: 10, isSave: true },
        };
        this.skills = data.skills || [];

        this.setPerceptionScore();
    }

    setPerceptionScore() {
        this.perception = this.getModifier('wis')
            ? this.getModifier('wis') + 10 + this.proficiency
            : 10 + this.proficiency;
    }

    getModifier(ability: keyof Ability): number {
        const abilityValue = this.ability[ability]?.value;
        return Math.floor((abilityValue - 10) / 2);
    }

    getSaveModifier(ability: keyof Ability) {
        if (this.ability[ability]?.isSave ) {
            return this.getModifier(ability) + this.proficiency;
        }else{
            return this.getModifier(ability);
        }
    }

}
