import { Component, OnInit } from '@angular/core';
import { Post } from "../../models/users";
import { ClientService } from "../../office/client.service";
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private clientService : ClientService) { }

  ngOnInit() {
  }
  addPost(title,body){
    if (!title || !body) {
      alert("no post");
    }else{
       this.clientService.savePost(title)
       .subscribe(employee => {
            console.log(employee);
         });
       
    }
  }

}
