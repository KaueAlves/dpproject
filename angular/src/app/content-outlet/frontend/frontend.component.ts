import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-frontend',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './frontend.component.html',
  styleUrl: './frontend.component.scss'
})
export class FrontendComponent {

}
