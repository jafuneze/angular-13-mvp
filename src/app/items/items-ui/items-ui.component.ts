import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Item } from '../item.interface';
import { ItemsPresenterService } from '../presenter/items-presenter.service';

@Component({
  selector: 'app-items-ui',
  templateUrl: './items-ui.component.html',
  styleUrls: ['./items-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsUiComponent implements OnInit {
  @Input() title: string;
  @Input() items: Item[] | null;
  @Output() add: EventEmitter<Item> = new EventEmitter();

  constructor( private presenter : ItemsPresenterService ) { }

  get itemGroup() : FormGroup {
    return this.presenter.itemsForm;
  }

  ngOnInit(): void {
    this.presenter.add$.subscribe( item => this.add.emit(item));
  }

  onSubmit() : void {
    this.presenter.addItemSubmit();
    this.itemGroup.reset();
  }

}
