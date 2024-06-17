import { Component, Input } from '@angular/core';
import { Post } from '../../models/post';
import { SocialPostComponent } from "../social-post/social-post.component";

@Component({
    selector: 'app-single-post',
    standalone: true,
    templateUrl: './single-post.component.html',
    styleUrl: './single-post.component.css',
    imports: [SocialPostComponent]
})
export class SinglePostComponent {
  singlePost:Post [] =[

  ]


@Input() post:string = "";
}
