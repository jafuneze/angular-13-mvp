import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsContainerComponent implements OnInit {

  constructor( private itemService: ItemsService ) { }

  ngOnInit(): void {
    // temporally for test the service 
    this.itemService.getItems().subscribe(
      res => {
        console.log( res );
      }
    )
  }

}
