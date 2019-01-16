import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { AllProduct } from '../../models/allproduct';

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  public allProducts: AllProduct = new AllProduct();
  private ProductOrderAmount: number;


  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get<AllProduct>("http://localhost:5000/api/Shop").subscribe(
      it => {
        this.allProducts = it;
      });
  }

  goHomePage() {
    this.navCtrl.popToRoot();
  }
}
