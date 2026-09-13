import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-me-coffee',
  standalone: true,
  templateUrl: './buy-me-coffee.html',
  styleUrl: './buy-me-coffee.scss',
})
export class BuyMeCoffeeComponent {
  openBuyMeCoffee() {
    window.open('https://buymeacoffee.com/deepakdevadiga', '_blank');
  }
}
