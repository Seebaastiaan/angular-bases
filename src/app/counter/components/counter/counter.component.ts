import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<h2>
      Counter:
      {{ counter }}
    </h2>
    <button
      (click)="IncrementBy(-20)"
      class="px-4 py-2 bg-yellow-900 text-zinc-50 rounded-xl mt-5 font-semibold mx-4"
    >
      -1
    </button>
    <button
      (click)="ResetCounter()"
      class="px-4 py-2 bg-yellow-900 text-zinc-50 rounded-xl mt-5 font-semibold mx-4"
    >
      ResetCounter
    </button>
    <button
      (click)="IncrementBy(20)"
      class="px-4 py-2 bg-yellow-900 text-zinc-50 rounded-xl mt-5 font-semibold mx-4"
    >
      +1
    </button>`,
})
export class CounterComponent {
  counter = 10;

  IncrementBy(value: number) {
    this.counter += value;
  }

  ResetCounter() {
    this.counter = 10;
  }
}
