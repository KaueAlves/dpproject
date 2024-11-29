import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Creature } from '../../../shared/models/creature.model';

@Component({
  selector: 'app-create-creature',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './create-creature.component.html',
  styleUrl: './create-creature.component.scss'
})
export class CreateCreatureComponent {

}
