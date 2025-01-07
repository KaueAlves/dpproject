import { CharacterBase } from "./characterBase.model";
import { Ability } from "./ability.model";
import { Skill } from "./skill.model";

export class Creature extends CharacterBase {
    senses?: string[];
    languages?: string[];
    descriptions?: string[];
    actions?: string[];
    nivel: number;
    page: number;

    constructor(data: Partial<Creature>) {
        super(data);
        this.senses = data.senses || [];
        this.languages = data.languages || [];
        this.descriptions = data.descriptions || [];
        this.actions = data.actions || [];
        this.nivel = data.nivel || 0;
        this.page = data.page || 0;
    }
}
