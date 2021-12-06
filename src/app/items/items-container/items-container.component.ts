import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ItemsService } from '../items.service';
import { Observable, Subject } from 'rxjs';
import { Item } from '../item.interface';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsContainerComponent {
  private itemAdd: Subject<Item> = new Subject();
  items$: Observable<Item[]> = this.itemService.getItems();
  
  constructor( private itemService: ItemsService ) { }

  add(item: Item) : void {
    // use the new item and send to db
    this.itemAdd.next(item);
  }

}
