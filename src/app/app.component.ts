import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Fibonaci';

  sumFibs(num: number) {
    let n: number = 0;
    let nPlusOne: number = 1;
    let temp: number = 0;
    let sum: number = 0;
    while (nPlusOne <= num) {
      temp = n;
      n = nPlusOne;
      nPlusOne = temp + n;
      if (n % 2 !== 0) {
        sum += n;
      }
    }
    return sum;
  }
  ngOnInit(): void {
    console.log(this.sumFibs(20));
    //
  }
}
