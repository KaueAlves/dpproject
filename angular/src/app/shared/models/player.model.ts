import { CharacterBase } from "./characterBase.model";
import { Ability } from "./ability.model";
import { Skill } from "./skill.model";

export class Player extends CharacterBase {
    description?: string;
    iniciative?: number;
    proficiency: number;
    perception?: number;
    classe?: string[];
    nivel: number[];
    player: string;

    constructor(data: Partial<Player>) {
        super(data); // Chama o construtor da classe base
        this.description = data.description;
        this.iniciative = data.iniciative;
        this.proficiency = data.proficiency || 0;
        this.perception = data.perception;
        this.nivel = data.nivel || [0];
        this.player = data.player || '';
        this.classe = data.classe || ['Aventureiro']
        this.setPerceptionScore();
    }

    setPerceptionScore() {
        this.perception = this.getModifier('wis')
            ? this.getModifier('wis') + 10 + this.proficiency
            : 10 + this.proficiency;
    }

    getSaveModifier(ability: keyof Ability): number {
        return this.ability[ability]?.isSave
            ? this.getModifier(ability) + this.proficiency
            : this.getModifier(ability);
    }
}
