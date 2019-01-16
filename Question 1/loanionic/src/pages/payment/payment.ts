import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Loan } from '../../models/loan';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  public loans: Loan;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get<Loan>("https://localhost:5001/api/Loan").subscribe(
      it => {
        console.log(it);
        this.loans = it;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
