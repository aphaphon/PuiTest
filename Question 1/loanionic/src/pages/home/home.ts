import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Loan } from '../../models/loan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private loans: Loan;
  private rate: number;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get<Loan>("https://localhost:5001/api/Loan").subscribe(
      it => {
        console.log(it);
        this.loans = it;
      });
  }

  CalculateRate() {
    this.http.post<Loan>("https://localhost:5001/api/Loan",
      {
        InterestRate: this.rate,
      }).subscribe(
        it => {
          this.loans = it;
        });
  }

}
