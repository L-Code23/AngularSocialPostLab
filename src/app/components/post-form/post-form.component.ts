import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../../models/post';
import { FormsModule } from '@angular/forms';
import { SocialPostComponent } from '../social-post/social-post.component';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule,SocialPostComponent],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
submitForm() {
throw new Error('Method not implemented.');
}
  formPost: Post = {} as Post;
  @Output() submitted: EventEmitter<void> = new EventEmitter<void>();
  display:boolean = false;
  
  submitPost():void{
    let newPost:Post = {...this.formPost};
    this.submitted.emit();
    this.formPost = {} as Post;
  }
  
  toggleDisplay(){
    this.display = !this.display;
  }
}
