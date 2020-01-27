import { Component } from '@angular/core';
import {User} from '../user/model'
import { stringify } from 'querystring';

@Component({
    selector: 'app-user',
   // template: '<h1>John Doe</h1>'
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.css']
})
export class UserComponent {
   user : User;

    constructor(){
       this.user = {
           firstName : 'John',
           lastName : 'Doe',
           age: 34,
           address :{
               street :'50 Street MA',
               city : 'Boston',
               state : 793
           },
           image: 'http//lorempixel.com/400/400/people/4'
       }
        
    }

 }