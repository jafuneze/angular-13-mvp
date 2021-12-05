import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
