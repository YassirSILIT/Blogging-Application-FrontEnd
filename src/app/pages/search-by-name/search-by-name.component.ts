import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.scss']
})
export class SearchByNameComponent {

  result: any=[];
  name: any;

  constructor(private postService : PostService,
              private snackBar : MatSnackBar){}

  ngOnInit(){

  }

  serachByName(){
    this.postService.searchByName(this.name).subscribe(res=>{
      this.result=res;
      console.log(this.result);
    }, error=>{
      this.snackBar.open("Something Went Wrong!!!", "OK");
    });
  }



}
