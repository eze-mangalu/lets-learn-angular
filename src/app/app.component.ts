import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

type NavLink = {
  label: string;
  path: string | any[];
  fragment?: string;
};

export const links: NavLink[] = [
  { label: 'The CLI', path: '/', fragment: 'the-cli' },
  { label: 'Components', path: '/components' },
  { label: 'Forms', path: '/forms' },
  { label: 'Routing', path: '/routes' },
  { label: 'Services', path: '/services' },
  { label: 'Generated code', path: '/generated-code' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isRoot = false;
  links = links;
  constructor(private router: Router) {}
  ngOnInit(): void {
    // Listen to route events and update `isRoot` value
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isRoot = event.url === '/' || /[#?]/.test(event.url[1]);
      }
    });
  }
}
