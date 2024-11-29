import { Skill } from "./skill.model";
import { Ability } from "./ability.model";

export interface Creature {
    [key: string]: any;
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
}
