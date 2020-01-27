import { Component, OnInit } from '@angular/core';
import { Post } from "../../models/users";
import { ClientService } from "../../office/client.service";
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    employee : Post [];
  constructor(private clientService : ClientService) { }

  ngOnInit() {
    this.clientService.getPosts().subscribe(posts =>{
      this.employee = posts;
    })
    
  }

}
