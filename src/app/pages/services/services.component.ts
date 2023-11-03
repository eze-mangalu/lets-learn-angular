import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  serviceExample = `
    import { Injectable } from "@angular/core";
    import { HttpClient } from "@angular/common/http";
    @Injectable({
      providedIn: "root"
    })
    export class UserService {
      constructor(private http: HttpClient) {}
      getUsers() {
        return http.get('/users/endpoint');
      }
    }
  `;
  providingService = `
    // In component
    @Component({
      standalone: true,
      ...
      providers: [UserService]
    })

    // In module
    @NgModule({
      ...
      providers: [UserService]
    })
  `;
  usingService = `
    import { UserService } from "./services/user.service"
    ...
    class MyComponents {
      constructor(private users: UserService) {}

      getUsers() {
        this.users.getUsers().subscribe(...)
      }
    }
  `;
}
