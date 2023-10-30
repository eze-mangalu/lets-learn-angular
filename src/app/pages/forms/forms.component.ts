import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forms.component.html',
  styles: [],
})
export class FormsComponent {
  templateDrivenModel = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-login-form',
      template: \`
        <form>
          <input type="text" [(ngModel)]="username">
          <input type="password" [(ngModel)]="password">
          <button type="submit">Submit</button>
        </form>
      \`
    })
    export class FavoriteColorComponent {
      username = '';
      password = '';
    }
  `;
  templateDrivenValidation = `
    ...
    <input type="text" [(ngModel)]="username" #username="ngModel" required customValidatorDirective>
    <ng-container *ngIf="username.invalid && (username.dirty || username.touched)">
      <span *ngIf="username.errors?.['required']">Is required</span>
    </ng-container>
    ...
  `;
  reactiveModel = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-login-form',
      template: \`
        <form>
          <input type="text" [formControl]="usernameControl">
          <input type="password" [formControl]="passwordControl">
          <button type="submit">Submit</button>
        </form>
      \`
    })
    export class FavoriteColorComponent {
      usernameControl = new FormControl('');
      passwordControl = new FormControl('');
    }
  `;
  reactiveValidation = `
    import { Validators } from "@angular/forms";
    ...
    usernameControl = new FormControl('', Validators.required);
    ...
    // In template
    <input type="text" [formControl]="usernameControl">
    <ng-container *ngIf="usernameControl.invalid && (usernameControl.dirty || usernameControl.touched)">
      <span *ngIf="usernameControl.errors?.['required']">Is required</span>
    </ng-container>
    ...
  `;
}
