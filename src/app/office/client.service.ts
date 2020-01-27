import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { Observable , of } from "rxjs";
import { Post } from "../models/users";

const httpOptions = {
  headers : new HttpHeaders('Content-Type:Application/json')
}

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  postsUrl : string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http : HttpClient) {}
  getPosts() : Observable<Post[]>  {
    return this.http.get<Post[]>(this.postsUrl);

  }
  savePost(employee:Post) : Observable <Post> {
     return this.http.post<Post>(this.postsUrl, employee,  httpOptions)
  }
}
