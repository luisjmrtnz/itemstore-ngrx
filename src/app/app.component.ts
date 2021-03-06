import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Item } from './common/models/item.model';
import { ItemsService } from './common/services/items.service';
import { AppStore } from './common/models/appstore.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<Array<Item>>;
  selectedItem: Observable<Item>;

  constructor(private itemsService: ItemsService, 
              private store: Store<AppStore>) {
    this.items = this.itemsService.items;
    this.selectedItem = this.store.select('selectedItem');
    this.selectedItem.subscribe(val => console.log(val));
    itemsService.loadItems();
  }

  deleteItem(item: Item){
    this.itemsService.deleteItem(item);
  }

  selectItem(item: Item){
    this.store.dispatch({ type: 'SELECT_ITEM', payload: item });
  }

  saveItem(item: Item){
    this.itemsService.saveItem(item);
    this.resetItem();
  }

  resetItem(){
    let emptyItem: Item = {id: null, name: '', description: ''};
    this.store.dispatch({ type: 'SELECT_ITEM', payload: emptyItem });
  }
}
