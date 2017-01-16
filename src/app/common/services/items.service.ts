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

}