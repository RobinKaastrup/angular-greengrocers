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

  filterItems(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const type = selectElement.value;
    if(type !== 'any') {
      this.items = this.items.filter((item) => item.type === type)
    } else {
      this.getItems()
    }
  }

  sortItems(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const type = selectElement.value;

    if(type === 'price') {
      this.items = this.items.sort((a, b) => a.price - b.price)
    } else if (type === 'name') {
      this.items = this.items.sort((a, b) => (a.name < b.name ? -1 : 1))
    } else {
      this.getItems()
    }
  }

  addToCart(item: Item): void {
    this.cartService.addToCart(item)
  }
}
