import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private products: Product;
  private productOrderName: string;
  private productOrderPrice: number;
  private productOrderAmount: number;



  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get<Product>("https://localhost:5001/api/Shop").subscribe(
      it => {
        console.log(it);
        this.products = it;
      });
  }

  orderProduct() {
    this.http.post<Product>("https://localhost:5001/api/Shop",
      {
        Name: this.productOrderName,
        Price: this.productOrderPrice,
        Amount: this.productOrderAmount
      }).subscribe(
        it => {
          this.products = it;
          this.navCtrl.push(ListPage);

        });
  }
}
