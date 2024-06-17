import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialPostComponent } from './components/social-post/social-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SocialPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSocialPostLab';
}
