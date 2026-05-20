import {
  UpperCasePipe,
  LowerCasePipe,
  DatePipe,
  CurrencyPipe,
  PercentPipe
} from '@angular/common';
import { Component, signal } from '@angular/core';
@Component({
  selector: 'app-footer',
  imports: [
        UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  title = signal('PPW ANGULAR 21');

  message = signal('Autor: Josué Abad');

  today = signal(new Date());

  price = signal(150);

  percent = signal(0.75);

}