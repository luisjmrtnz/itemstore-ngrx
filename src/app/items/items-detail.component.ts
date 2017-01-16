import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../common/models/item.model';

@Component({
    selector: 'items-detail',
    template:`
        <div>
            <h2 *ngIf="selectedItem.id">Editing {{originalName}}</h2>
            <h2 *ngIf="!selectedItem.id">Create new Item</h2>
        </div>
        <div>
            <div>
                <label>Item name: </label>
                <input type="text" 
                       placeholder="Enter the name"
                       [(ngModel)]="selectedItem.name">
            </div>
            <div>
                <label>Item description: </label>
                <input type="text" 
                       placeholder="Enter the description"
                       [(ngModel)]="selectedItem.description">
            </div>
            <div>
                <button (click)="saved.emit(selectedItem)">Save</button>
            </div>
        </div>
    `
})

export class ItemsDetailComponent{
    originalName: string;
    selectedItem: Item;

    @Output() saved = new EventEmitter<Item>();
    
    @Input() set item(value: Item){
        if(value) this.originalName = value.name;
        this.selectedItem = Object.assign({}, value);
    }
}