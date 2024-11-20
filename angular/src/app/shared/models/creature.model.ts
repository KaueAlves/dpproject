import { Skill } from "./skill.model";
import { Ability } from "./ability.model";

export interface Creature {
    [key: string]: any;
    name: string;
    class: string[];
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
}
