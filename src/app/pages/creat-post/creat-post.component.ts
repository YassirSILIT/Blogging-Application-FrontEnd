import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-creat-post',
  templateUrl: './creat-post.component.html',
  styleUrls: ['./creat-post.component.scss']
})
export class CreatPostComponent {

  postForm! : FormGroup;
  tags:string[] = [];

  constructor(private fb : FormBuilder,
              private router : Router,
              private snackBar : MatSnackBar,
              private postServive : PostService){}

  ngOnInit(){
    this.postForm= this.fb.group({
      name : [null, Validators.required],
      content : [null, [Validators.required, Validators.maxLength(5000)]],
      image : [null, Validators.required],
      postedBy : [null, Validators.required]
    })
  }

  add(event:any){
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push(value);
    }
    event.chipInput!.clear();
  }

  remove(tag:any){
    const index = this.tags.indexOf(tag);
    if (index>=0) {
      this.tags.splice(index,1);
    }
  }

  createPost(){
    const data = this.postForm.value;
    data.tags = this.tags;

    this.postServive.createNewPost(data).subscribe(res=>{
      this.snackBar.open("Post Created Saccusfully!!!", "OK");
      this.router.navigateByUrl("/");
    }, error =>{
      this.snackBar.open("Something Went Wrong!!!", "OK");
    })
  }

}
