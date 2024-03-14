import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { GroceriesService } from 'src/app/groceries.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'store-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Item[] = [];

  constructor(private groceriesService: GroceriesService, private cartService: CartService) {}
  
  ngOnInit() {
    this.getItems()
  }

  getItems(): void {
    this.groceriesService.getItems().subscribe(
      items => {
        this.items = items;
        console.log(this.items)
      },
      error => console.log(error)
    )
  }

  addToCart(item: Item): void {
    this.cartService.addToCart(item)
  }
}
