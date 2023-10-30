import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestComponent } from 'src/app/components/test/test.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, TestComponent],
  templateUrl: './components.component.html',
})
export class ComponentsComponent {
  counter = 1;
  isEven: boolean = false;
  testComponentScript = `
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';

    @Component({
    selector: 'app-test',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './test.component.html',
    })
    export class TestComponent {

    }
  `;
  addInputScript = `
    import { Input } from '@angular/core';
    ...
    @Input() title?: string;

    // Template
    <app-test title="My title"></app-test>
  `;
  withOutput = `
    import { Output } from '@angular/core';
    ...
    // Template
    <app-test title="With output" (clicked)="onClicked()"></app-test>
  `;
  twoWayBinding = `
    @Input() counter?: number;
    @Output() counterChange = new EventEmitter<number>();
    ...
    // Template
    <app-test title="Counter" [counter]="counter" (counterChanged)="handleCounterChanged($event)"></app-test>
  `;
  ngClassDirective = `
    // Toggle between 'font-bold' and 'italic' based on isBold value
    <p [ngClass]="isBold ? 'font-bold': 'italic'">{{ counter }}</p>
  `;
  ngStyleDirective = `
    // Set style based on logic
    <p [ngStyle]="{ 'font-weight': isBold === true ? 'bold': 'normal' }">{{ counter }}</p>
  `;
  ngModelDirective = `
    // Import FormsModule to your application
    
    // Create a property to bind to
    counter: number;
    ...
   
    // In the template add ngModel directive with the property as value
    <input id="counter" type="number" [(ngModel)]="counter">
  `;
  ngIfDirective = `
    // The div won't be rendered if counter is falsy
    <div *ngIf="counter">...</div>
  `;
  ngForDirective = `
    // Loop over a collection of items and display the name property
    <div *ngFor="let item of items">{{item.name}}</div>
  `;
  ngSwitchDirective = `
    // Switch the UI based on the value provided
    <div [ngSwitch]="currentItem.feature">
    <app-stout-item    *ngSwitchCase="'stout'"    [item]="currentItem"></app-stout-item>
    <app-device-item   *ngSwitchCase="'slim'"     [item]="currentItem"></app-device-item>
    <app-lost-item     *ngSwitchCase="'vintage'"  [item]="currentItem"></app-lost-item>
    <app-best-item     *ngSwitchCase="'bright'"   [item]="currentItem"></app-best-item>
    <app-unknown-item  *ngSwitchDefault           [item]="currentItem"></app-unknown-item>
  </div>
  `;

  get isBold(): boolean {
    return this.counter % 2 === 0;
  }

  onClicked() {
    alert('From components page.');
  }
}
