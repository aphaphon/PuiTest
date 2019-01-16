import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Loan } from '../../models/loan';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  private loans: Loan;
  private balances: number;
  private years: number;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get<Loan>("https://localhost:5001/api/Loan").subscribe(
      it => {
        console.log(it);
        this.loans = it;
      });
  }

  CalculatePayment() {
    this.http.post<Loan>("https://localhost:5001/api/Loan",
      {
        Balance: this.balances,
        CountYear: this.years
      }).subscribe(
        it => {
          this.loans = it;
        });
  }
}
