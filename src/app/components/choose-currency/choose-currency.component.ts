import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Currency} from '../../models/currency';
import { Observable } from 'rxjs';
import {CurrencyService} from '../../services/currency.service';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-choose-currency',
  templateUrl: './choose-currency.component.html',
  styleUrls: ['./choose-currency.component.scss']
})
export class ChooseCurrencyComponent implements OnInit {

  myControl = new FormControl();
  rates = {};
  r = {};
  options = [];
  value: string;
  values = [];
  chooseValue: number;
  filteredOptions: Observable<string[]>;
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.filteredOp();
    this.getRates();
    
  }


  // tslint:disable-next-line: typedef
  getRates() {
    this.currencyService.getRates().subscribe(data => {
      this.rates = data;
      this.options = Object.keys(this.rates);
      this.values = Object.values(this.rates);
      
      // if (this.options.values()) {
      //   console.log('Buraya girdi');
      // }
    });
  }
// TODO => EURO / TL ile oranı bul.

  // getRate() {
  //   this.currencyService.getRates().pipe(map(data => {

  //    // tslint:disable-next-line: no-conditional-assignment
  //     if (Object.keys(this.rates).filter(x => x === this.value)) {
  //         const id = data.indexOf(this.value);
  //         this.rates = +Object.values(this.rates) / id ;
  //    }
  //     console.log(Object.values(data));
  //   }));
  // }




  // tslint:disable-next-line: typedef
  filteredOp() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(startWith(''), map(value => this._filter(value)));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  getCurrency(currencyValue: string): string {
    if (currencyValue) {
      this.value = currencyValue;
      // console.log(this.value);
      // İŞLEMLERİ BURADA YAP
      this.chooseValue = this.rates[this.value];
      // this.rates[0] = 5;
      console.log(this.rates)

       // tslint:disable-next-line: align
       console.log('rates orj.', this.rates);
     this.rates['value']  = Object.values(this.rates).map(data => (this.chooseValue / (data as any)));
     this.rates['key'] = Object.values(this.rates).map(data=> data);

      console.log("key ", this.rates);
      console.log("Value", this.rates['value'])
      console.log('1-', Object.values(this.rates).map(data => (this.chooseValue / (data as any))));
      console.log("R", this.r)
    }
    return this.value;
  }

}
