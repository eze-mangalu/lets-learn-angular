import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { links } from 'src/app/app.component';
import { TestComponent } from 'src/app/components/test/test.component';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule, RouterModule, TestComponent],
  templateUrl: './intro.component.html',
  styles: [],
})
export class IntroComponent {
  links = links;
}
