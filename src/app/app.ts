import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { BuyMeCoffeeComponent } from './components/buy-me-coffee/buy-me-coffee';
import Lenis from 'lenis';

@Component({
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BuyMeCoffeeComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tools-shell');

  private lenis?: Lenis;
}
