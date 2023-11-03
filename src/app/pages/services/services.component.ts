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
    export class UsersService {
      constructor(private http: HttpClient) {}
      getUsers() {
        return http.get('/users/endpoint');
      }
    }
  `;
}
