export interface Ability {
    str: { value: number, modifier?: number, saveModifier?: number, isSave: boolean };
    dex: { value: number, modifier?: number, saveModifier?: number, isSave: boolean };
    con: { value: number, modifier?: number, saveModifier?: number, isSave: boolean };
    int: { value: number, modifier?: number, saveModifier?: number, isSave: boolean };
    wis: { value: number, modifier?: number, saveModifier?: number, isSave: boolean };
    cha: { value: number, modifier?: number, saveModifier?: number, isSave: boolean };
  
}
