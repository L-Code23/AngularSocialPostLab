import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { SinglePostComponent } from '../single-post/single-post.component';
import { PostFormComponent } from '../post-form/post-form.component';
import { Post } from '../../models/post';

@Component({
  selector: 'app-social-post',
  standalone: true,
  imports: [SinglePostComponent,PostFormComponent],
  templateUrl: './social-post.component.html',
  styleUrl: './social-post.component.css'
})
export class SocialPostComponent {

allPost:Post []= [

]
@Input() newPost:Post = {} as Post;
@Output() submitPost = new EventEmitter<Post>();





onsubmit():void{
this.submitPost.emit(this.newPost);
}




}

