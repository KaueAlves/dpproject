import { Skill } from "./skill.model";
export interface Player {
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
    ability: ability;
    skills?: Skill[];
}

export interface ability{
    str: {value:number, modifier: number, saveModifier?: number, isSave: boolean};
    dex: {value:number, modifier: number, saveModifier?: number, isSave: boolean};
    con: {value:number, modifier: number, saveModifier?: number, isSave: boolean};
    int: {value:number, modifier: number, saveModifier?: number, isSave: boolean};
    wis: {value:number, modifier: number, saveModifier?: number, isSave: boolean};
    cha: {value:number, modifier: number, saveModifier?: number, isSave: boolean};
}