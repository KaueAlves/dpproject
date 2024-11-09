export interface Skill {
    name: string;
    ability: string;
    abilityMod: number;
    proficiency?: SkillLevel;
    proficiencyMod?: number;
    description?: string;
}

export enum SkillLevel {
    Untrained = "Untrained",
    HalfProficient = "Half Proficient",
    Proficient = "Proficient",
    Expertise = "Expertise"
}