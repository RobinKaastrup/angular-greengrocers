import { Injectable } from '@angular/core';
import { CartItem } from './models/cartItem';
import { Subject } from 'rxjs';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  cartItemsChanged = new Subject<CartItem[]>


  constructor() { }

  getCartItems() {
    return this.cartItems.slice();
  }

  addToCart(item: Item) {
    const cartItemIndex = this.cartItems.findIndex(ci => ci.item.id === item.id);
    if(cartItemIndex !== -1) {
      this.cartItems[cartItemIndex].quantity++;
    } else {
      const newCartItem: CartItem = new CartItem(item, 1)
      this.cartItems.push(newCartItem)
    }
    this.cartItemsChanged.next(this.cartItems.slice())
  }

  increment(item: Item) {
    const cartItemIndex = this.cartItems.findIndex(ci => ci.item.id === item.id);
    if(cartItemIndex !== -1) {
      this.cartItems[cartItemIndex].quantity++;
      this.cartItemsChanged.next(this.cartItems.slice())
    }
  }

  
  decrement(item: Item) {
    const cartItemIndex = this.cartItems.findIndex(ci => ci.item.id === item.id);
    if(cartItemIndex !== -1) {
      this.cartItems[cartItemIndex].quantity--;
      
      if(this.cartItems[cartItemIndex].quantity < 1) {
        this.cartItems.splice(cartItemIndex, 1)
      } 
      this.cartItemsChanged.next(this.cartItems.slice())
    }
    
  }

  sumItems(): number {
    let sum = 0
    for(let cartItem of this.cartItems) {
      sum += cartItem.item.price * cartItem.quantity
    }

    return sum;
  }

}

