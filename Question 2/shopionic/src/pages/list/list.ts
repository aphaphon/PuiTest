import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AllProduct } from '../../models/allproduct';
import { HttpClient } from '@angular/common/http';
import { ShopPage } from '../shop/shop';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public allProducts: AllProduct = new AllProduct();
  private ProductOrderAmount: number;


  constructor(public navCtrl: NavController, public http: HttpClient, public navParams: NavParams) {
    this.http.get<AllProduct>("http://localhost:5000/api/Shop").subscribe(
      it => {
        this.allProducts = it;
      });
  }

  goShopPage() {
    this.http.post<AllProduct>("https://localhost:5001/api/Shop", { Amount: this.ProductOrderAmount })
      .subscribe(
        it => {
          console.log(it);
          this.allProducts = it;
          this.navCtrl.push(ShopPage)
        });
  }
}
