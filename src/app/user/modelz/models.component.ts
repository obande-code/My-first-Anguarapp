import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { User } from '../model'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
   user : User = {
    firstName : '',
    lastName : '',
    age: null,
    address :{
      street : '',
      city: '',
      state: null
    }
   }
      
   models: User  [];
   showExtended : boolean = true;
   showUserForm : boolean = false;
   enableAdd: boolean = false;
  constructor( private dataService : DataService) { }

  ngOnInit() {
    this.models = [
      {
        firstName : 'John',
        lastName : 'Doe',
        age: 34,
        address :{
            street :'50 Street MA',
            city : 'Boston',
            state : 793
        },
        image: './assets/images/photography-of-a-guy-wearing-green-shirt-1222271.jpg',
        registered: new Date('01/03/2004'),
        hide : true
    },
    {
      firstName : 'James',
      lastName : 'Doke',
      age: 38,
      address :{
          street :'50 Street NA',
          city : 'Bosnia',
          state : 733
      },
      image: 'http://lorempixel.com/300/300/people/2',
      registered: new Date('05/07/2010'),
      hide : true
  },
  {
    firstName : 'Jake',
    lastName : 'Dake',
    age: 36,
    address :{
        street :'23 Street FL',
        city : 'Miami',
        state : 723
    },
    image: 'http://lorempixel.com/300/300/people/3',
    registered: new Date('07/07/2007'),
    hide : true
}
    ];

    this.showExtended = false;
  }
  addUser(){
    this.models.push(this.user);
    this.user.registered = new Date();

    this.user = {
      firstName : '',
      lastName : '',
      age: null,
      address :{
        street : '',
        city: '',
        state: null
      }
    }
  }
  toggleHide(user:User){
    user.hide = !user.hide;
  }
  onSubmit(e){
    e.preventDefault();
  }

}
