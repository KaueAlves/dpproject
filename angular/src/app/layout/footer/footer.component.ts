import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  menuLinks = [
    {label: 'Sobre', path: '/sobre'},
    {label: 'Politica de Privacidade', path: '/politica-privacidade'},
    {label: 'Contato', path: '/contato'},   
  ]

  currentYearLong(): number {
    return new Date().getFullYear();
  }
}
