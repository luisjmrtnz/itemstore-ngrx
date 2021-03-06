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

    saveItem(item: Item){
        (item.id)? this.updateItem(item): this.createItem(item);
    }

    createItem(item: Item){
        this.store.dispatch({ type: 'CREATE_ITEM', payload: this.addUUID(item)});
    }

    updateItem(item: Item){
        this.store.dispatch({ type: 'UPDATE_ITEM', payload: item });
    }

    private addUUID(item: Item): Item {
        return Object.assign({}, item, {id: this.generateUUID()}); // Avoiding state mutation FTW!
    }
    private generateUUID(): string {
        return ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
        .replace(/1|0/g, function() {
            return (0 | Math.random() * 16).toString(16);
        });
    };
}