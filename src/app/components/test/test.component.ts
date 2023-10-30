import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styles: [],
})
export class TestComponent implements OnInit {
  @Input({ alias: 'name' }) title: string = 'Test component';
  @Output() clicked: EventEmitter<boolean> = new EventEmitter();
  @Input() counter?: number;
  @Output() counterChange = new EventEmitter<number>();
  private _counter?: number;
  ngOnInit(): void {
    this.storeInitialValue();
  }

  storeInitialValue() {
    this._counter = this.counter;
  }

  handleClick() {
    this.clicked.emit(true);
  }

  updateCounter() {
    if (this.counter) {
      this.counter += 1;
      this.counterChange.emit(this.counter);
    }
  }

  reset() {
    this.counter = this._counter;
    this.counterChange.emit(this.counter);
  }
}
