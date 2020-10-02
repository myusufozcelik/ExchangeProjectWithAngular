import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit, OnChanges {

  constructor(private currencyService: CurrencyService ) { }
  
  baseCurrency;
  currencyDate = new Date().toLocaleString();
  rates = {};
  currencyKey = [];
  currencyObject = [];

  @Input() chooseCurrency: string;
  @Input() perUnit: {};
  @Input() chooseVal: any;
  @Output() newChooseEvent = new EventEmitter<any>();

  ngOnInit(): void {
    // this.updateCurrencyValues();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.updateCurrencyValues();
  }


  // tslint:disable-next-line: typedef
  updateCurrencyValues() {
    if (this.chooseCurrency === '') {

      this.rates = Object.assign({}, this.perUnit);
      console.log(this.perUnit);
    }
    else {

      for (const [key, value] of Object.entries(this.perUnit)) {
        this.rates = {
          ...this.rates,
          [key]: (value as number) / this.chooseVal
        };
      }
    }

  }
  // tslint:disable-next-line: typedef
  listenCurrency() {

    console.log('perUnit', this.perUnit);
    console.log('choseVal', this.chooseVal);
    console.log('ChooseCurrency', this.chooseCurrency);
    console.log(this.perUnit);
  }

  // tslint:disable-next-line: typedef
  newValues() {
    if (this.chooseCurrency !== '') {
        this.baseCurrency = this.chooseCurrency;
    }

}
}
