import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  food = {} as Food;
  CartList = [];

  constructor(private cartDao: CartService, private router: Router) {
    this.CartList =this.cartDao.getCart();
  }

  submit() {
    this.cartDao.addToCart(this.food);

    console.log('Food List', this.cartDao.getCart());

  }

  
  details(){
    this.router.navigateByUrl('details');
  }
}
