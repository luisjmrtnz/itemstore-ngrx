import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
 
import { Item } from '../models/item.model';
import { AppStore } from '../models/appstore.model';

@Injectable()

export class ItemsService {
    items: Observable<Array<Item>>;

    constructor(private store: Store<AppStore>){
        this.items = store.select('items');
    }

    loadItems(){
        let initialItems: Item[] = [{ id: 2, name: "Pencil", description: "Good for the school"}];
        this.store.dispatch({ type: 'ADD_ITEMS', payload: initialItems });
    }

    deleteItem(item: Item){
        this.store.dispatch({ type: 'DELETE_ITEM', payload: item});
    }

    updateItem(item: Item){
        this.store.dispatch({ type: 'UPDATE_ITEM', payload: item });
    }

}