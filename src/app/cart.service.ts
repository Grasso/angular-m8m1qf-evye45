import { Injectable } from '@angular/core';
import { Product } from './products';


@Injectable({ providedIn: 'root'   })

//
// CartService
//
export class CartService {

  constructor() { }

  //
  // items
  //
  items: Product[] = [];

  //
  // addToCard
  //
  addToCard(product:Product){
    this.items.push(product);
  }

  //
  // getItems
  //
  getItems(){
    return this.items;
  }

  //
  // clearCart
  //
  clearCart(){
    this.items = [];
    return this.items;
  }

}