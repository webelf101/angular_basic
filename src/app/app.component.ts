import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 1;
  items = ['Item1', 'Item2', 'Item3', 'Item4'];

  countUpOne() {
    this.items.push('Item3222');
  }
}
