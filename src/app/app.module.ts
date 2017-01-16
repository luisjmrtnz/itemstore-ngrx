import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { items } from './common/stores/items.store';
import { selectedItem } from './common/stores/selectedItem.store';
import { AppComponent } from './app.component';
import { ItemsService } from './common/services/items.service';
import { ItemsListComponent } from './items/items-list.component';
import { ItemsDetailComponent } from './items/items-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ items, selectedItem })
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
