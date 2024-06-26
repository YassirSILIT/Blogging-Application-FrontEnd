import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL= 'http://localhost:8084/api'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  createNewPost(data:any):Observable<any>{
    return this.http.post(BASIC_URL + `/posts`, data);
  }

  getAllPosts():Observable<any>{
    return this.http.get(BASIC_URL + `/posts`);
  }

  getPostById(id:number):Observable<any>{
    return this.http.get(BASIC_URL + `/posts/${id}`);
  }

  likePost(postId:number):Observable<any>{
    return this.http.put(BASIC_URL + `/posts/${postId}/like`, {});
  }

  searchByName(name:string):Observable<any>{
    return this.http.get(BASIC_URL + `/posts/search/${name}`);
  }

}
