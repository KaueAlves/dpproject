import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Creature } from '../../../shared/models/creature.model';

@Component({
  selector: 'app-create-creature',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-creature.component.html',
  styleUrl: './create-creature.component.scss'
})
export class CreateCreatureComponent implements OnInit {
  creatureForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.creatureForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      armorClass: ['', Validators.required],
      maxLife: ['', Validators.required],
      currentLife: ['', Validators.required],
      speed: ['', Validators.required],
      ability: this.fb.group({
        str: this.fb.group({
          value: ['', Validators.required],
          isSave: [false]
        }),
        dex: this.fb.group({
          value: ['', Validators.required],
          isSave: [false]
        }),
        con: this.fb.group({
          value: ['', Validators.required],
          isSave: [false]
        }),
        int: this.fb.group({
          value: ['', Validators.required],
          isSave: [false]
        }),
        wis: this.fb.group({
          value: ['', Validators.required],
          isSave: [false]
        }),
        cha: this.fb.group({
          value: ['', Validators.required],
          isSave: [false]
        })
      }),
      nivel: ['', Validators.required],
      exp: ['', Validators.required],
      descriptions: this.fb.array([]),
      actions: this.fb.array([]),
      skills: this.fb.array([]),
      senses: this.fb.array([]),
      languages: this.fb.array([]),
      resistences: this.fb.array([]),
      immunitysDamage: this.fb.array([]),
      immunitysCondition: this.fb.array([]),
      page: ['', Validators.required]
    });
  }

  ngOnInit() {}

  get descriptions() {
    return this.creatureForm.get('descriptions') as FormArray;
  }

  get actions() {
    return this.creatureForm.get('actions') as FormArray;
  }

  get skills() {
    return this.creatureForm.get('skills') as FormArray;
  }

  get senses() {
    return this.creatureForm.get('senses') as FormArray;
  }

  get languages() {
    return this.creatureForm.get('languages') as FormArray;
  }

  get resistences() {
    return this.creatureForm.get('resistences') as FormArray;
  }

  get immunitysDamage() {
    return this.creatureForm.get('immunitysDamage') as FormArray;
  }

  get immunitysCondition() {
    return this.creatureForm.get('immunitysCondition') as FormArray;
  }

  addDescription() {
    this.descriptions.push(this.fb.control(''));
  }

  removeDescription(index: number) {
    this.descriptions.removeAt(index);
  }

  addAction() {
    this.actions.push(this.fb.control(''));
  }

  removeAction(index: number) {
    this.actions.removeAt(index);
  }

  addSkill() {
    this.skills.push(this.fb.group({
      name: ['', Validators.required],
      ability: ['', Validators.required],
      abilityMod: ['', Validators.required],
      proficiency: ['', Validators.required],
      proficiencyMod: ['', Validators.required],
      description: ['']
    }));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  addSense() {
    this.senses.push(this.fb.control(''));
  }

  removeSense(index: number) {
    this.senses.removeAt(index);
  }

  addLanguage() {
    this.languages.push(this.fb.control(''));
  }

  removeLanguage(index: number) {
    this.languages.removeAt(index);
  }

  addResistence() {
    this.resistences.push(this.fb.control(''));
  }

  removeResistence(index: number) {
    this.resistences.removeAt(index);
  }

  addImmunityDamage() {
    this.immunitysDamage.push(this.fb.control(''));
  }

  removeImmunityDamage(index: number) {
    this.immunitysDamage.removeAt(index);
  }

  addImmunityCondition() {
    this.immunitysCondition.push(this.fb.control(''));
  }

  removeImmunityCondition(index: number) {
    this.immunitysCondition.removeAt(index);
  }

  addControl(arrayField: string) {
    (this.creatureForm.get(arrayField) as FormArray).push(this.fb.control(''));
  }

  removeControl(arrayField: string, index: number) {
    (this.creatureForm.get(arrayField) as FormArray).removeAt(index);
  }

  getFormArray(arrayField: string): FormArray {
    return this.creatureForm.get(arrayField) as FormArray;
  }

  onSubmit() {
    if (this.creatureForm.valid) {
      const newCreature: Creature = this.creatureForm.value;
      console.log(newCreature);
    }
  }
}
