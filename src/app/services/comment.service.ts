import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL= 'http://localhost:8084/api/comments'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  addComment(postId: number, postedBy: string, content: string): Observable<any>{
    const params={
      postId: postId,
      postedBy: postedBy
    }
    return this.http.post<any>(BASIC_URL +`/create`,content, {params});
  }

  getCommentsByPostId(postId: number): Observable<any>{
    return this.http.get(BASIC_URL +`/${postId}`);
  }

}
