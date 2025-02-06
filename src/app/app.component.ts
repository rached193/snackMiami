import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LandingAnimationComponent} from './landing-animation/landing-animation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingAnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SnacksMiami';
}
