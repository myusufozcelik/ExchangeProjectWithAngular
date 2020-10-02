import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ChooseCurrencyComponent } from './components/choose-currency/choose-currency.component';
const routes: Routes = [
  {path: '', component: MainLayoutComponent,
  children: [
    {
      path: 'currency', component: ChooseCurrencyComponent
    },
  ]


},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
