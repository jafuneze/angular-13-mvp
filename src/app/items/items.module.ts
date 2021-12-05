import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsUiComponent } from './items-ui/items-ui.component';
import { ItemsContainerComponent } from './items-container/items-container.component';


@NgModule({
  declarations: [
    ItemsUiComponent,
    ItemsContainerComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
