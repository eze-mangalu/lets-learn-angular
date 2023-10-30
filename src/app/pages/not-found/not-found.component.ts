import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styles: [],
})
export class NotFoundComponent implements OnInit {
  path?: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.path = this.router.url;
  }
}
