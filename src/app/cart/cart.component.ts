import { Component } from '@angular/core';
import { CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();

  get total(){
    var t=0;
    this.items.forEach(function(value){
        t+=value.price;
    });
    return t;
  }

    get numItems(){
    var t=0;
    this.items.forEach(function(value){
        t+=1;
    });
    return t;
  }

  constructor(private cartService: CartService) {
  
  
  }
  

  
}