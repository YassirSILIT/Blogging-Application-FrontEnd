import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute} from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent {

  id = this.activedRoute.snapshot.params['id'];
  postData:any;
  commentForm! : FormGroup;
  comments:any;

  constructor(private postService : PostService,
              private activedRoute : ActivatedRoute,
              private snackBar : MatSnackBar,
              private fb : FormBuilder,
              private commentService : CommentService){}

  ngOnInit(){
    console.log(this.id);
    this.getPostById();

    this.commentForm = this.fb.group({
      postedBy: [null, Validators.required],
      content : [null, Validators.required]
    })
  }

  getPostById(){
    this.postService.getPostById(this.id).subscribe(res=>{
      this.postData = res;
      console.log(res);
      this.getCommentsPostById();
    }, error =>{
      this.snackBar.open("Something Went Wrong!!!", "OK");
    })
  }

  getCommentsPostById(){
    this.commentService.getCommentsByPostId(this.id).subscribe(res=>{
      this.comments=res;
    }, error =>{
      this.snackBar.open("Something Went Wrong!!!", "OK");
    })
  }

  likePost(){
    this.postService.likePost(this.id).subscribe(res=>{
      this.snackBar.open("Post Liked Successfully", "OK");
      this.getPostById();
    }, error =>{
      this.snackBar.open("Something Went Wrong!!!", "OK");
    })
  }

  publishComment(){
    const postedBy = this.commentForm.get('postedBy')?.value;
    const content = this.commentForm.get('content')?.value;

    this.commentService.addComment(this.id, postedBy, content).subscribe(res=>{
      this.snackBar.open("Post Published Successfully", "OK");
      this.getCommentsPostById();
    }, error =>{
      this.snackBar.open("Something Went Wrong!!!", "OK");
    })
  }

}
