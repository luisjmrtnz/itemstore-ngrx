import { Component, Input, Output } from '@angular/core';

import { Item } from '../common/models/item.model';

@Component({
    selector: 'items-detail',
    template:`
        <div>
            <h2 *ngIf="selectedItem.id">Editing {{originalName}}</h2>
        </div>
    `
})

export class ItemsDetailComponent{
    originalName: string;
    selectedItem: Item;
    
    @Input() set item(value: Item){
        if(value) this.originalName = value.name;
        this.selectedItem = Object.assign({}, value);
    }
}