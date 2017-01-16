import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../common/models/item.model';

@Component({
    selector: 'items-list',
    template: `
        <div *ngFor="let item of items">
            <h2> {{ item.name }}</h2>
            <p> {{ item.description }} </p>
            <button (click)="deleted.emit(item); $event.stopPropagation()">Delete</button>
        </div>
    `
})

export class ItemsListComponent {
    @Input()
    items: Item[];

    @Output() deleted = new EventEmitter<Item>();

}