import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  apiUrl: string = environment.url;

  constructor(private httpClient: HttpClient) { }

// tslint:disable-next-line: typedef
getRates() {
  return this.httpClient.get<any>(this.apiUrl)
  .pipe(map(result => result.rates));
}

}
