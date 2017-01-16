import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../common/models/item.model';

@Component({
    selector: 'items-list',
    template: `
        <div *ngFor="let item of items">
            <p> {{ item.name }}</p>
            <p> {{ item.description }} </p>
            <button>Delete</button>
        </div>
    `
})

export class ItemsListComponent {
    @Input()
    items: Item[];
}