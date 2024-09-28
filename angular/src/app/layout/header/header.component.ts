import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar o CommonModule
import { ActivatedRoute } from '@angular/router';

type MenuType = 'profile' | 'mobile';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  currentPath: string;

  menuVisibility = {
    'profile': false,
    'mobile': false
  };

  menuLinks = [
    { label: 'API', path: '/api' },
    { label: 'FrontEnd', path: '/frontend' },
    { label: 'Backend', path: '/project' },
    { label: 'Artes', path: '/calendar' },
  ];

  menuProfile = [
    { label: 'Your Profile', path: '/profile/' },
    { label: 'Settings', path: '/settings/' },
    { label: 'Sing out', path: '/logout' }
  ]

 

  constructor(private activatedRoute: ActivatedRoute) {
    this.currentPath = this.currentPath = this.activatedRoute.snapshot.url.map(segment => segment.path).join('/');
    console.log(this.currentPath);

  }

  ngOninit() {

  }

  toggleMenu(menu: MenuType): void {
    this.menuVisibility[menu] = !this.menuVisibility[menu]; // Alterna o estado do menu correspondente
  }
}
