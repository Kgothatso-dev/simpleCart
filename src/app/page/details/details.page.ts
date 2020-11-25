import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  CartList = [];
  count;

  constructor(private cartDao: CartService) { }

  ngOnInit() {

    this.CartList = this.cartDao.getCart();
    this.count = this.CartList.length;
  }

}
