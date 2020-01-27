import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
//import { Observable } from "rxjs/Observable";;

@Injectable({
  providedIn: 'root'
})
export class PostService {
   postUrl : string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http : HttpClient) {}
}
