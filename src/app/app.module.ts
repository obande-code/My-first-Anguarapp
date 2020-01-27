import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ModelsComponent } from './user/modelz/models.component';
import { NavbarComponent } from './models/navbar/navbar.component';
import { DataService } from './services/data.service';
import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employer/employee/employee.component';
import { ClientService } from "./office/client.service";
import { HttpClient } from '@angular/common/http';
import { PostFormComponent } from './post/post-form/post-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './component/home/home.component';
import { ClientpanelComponent } from './client/clientpanel/clientpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ModelsComponent,
    NavbarComponent,
    PostComponent,
    EmployeeComponent,
    PostFormComponent,
    HomeComponent,
    ClientpanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService,PostService,ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
