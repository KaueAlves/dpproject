import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Player } from '../../../shared/models/player.model';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-character.component.html',
  styleUrl: './create-character.component.scss'
})
export class CreateCharacterComponent implements OnInit {
  characterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.characterForm = this.fb.group({
      player: ['', Validators.required],
      name: ['', Validators.required],
      classe: ['', Validators.required],
      nivel: ['', Validators.required],
      armorClass: ['', Validators.required],
      maxLife: ['', Validators.required],
      currentLife: ['', Validators.required],
      proficiency: ['', Validators.required],
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
      skills: this.fb.array([]),
    });
  }

  ngOnInit() {}

  get skills() {
    return this.characterForm.get('skills') as FormArray;
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

  addControl(arrayField: string) {
    (this.characterForm.get(arrayField) as FormArray).push(this.fb.control(''));
  }

  removeControl(arrayField: string, index: number) {
    (this.characterForm.get(arrayField) as FormArray).removeAt(index);
  }

  getFormArray(arrayField: string): FormArray {
    return this.characterForm.get(arrayField) as FormArray;
  }

  onSubmit() {
    if (this.characterForm.valid) {
      const newCharacter: Player = this.characterForm.value;
      console.log(newCharacter);
    }
  }
}
