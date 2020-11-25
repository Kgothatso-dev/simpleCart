import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartList = [];

  constructor() { }

  addToCart(food){
    this.cartList.push({name: food.name, discription: food.discription, price: food.price});
  }

  removeItemAll(food) {
    var i = 0;
    while (i < this.cartList.length) {
      if (this.cartList[i] === food) {

      this.cartList.splice(i, 1);
      } else {
        ++i;
      }
    }
    return this.cartList;

  }

  getCart(){
    return this.cartList;
  }

}
