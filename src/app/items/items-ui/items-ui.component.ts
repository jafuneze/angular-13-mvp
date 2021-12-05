import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-ui',
  templateUrl: './items-ui.component.html',
  styleUrls: ['./items-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsUiComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
