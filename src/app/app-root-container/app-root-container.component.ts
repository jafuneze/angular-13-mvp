import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-app-root-container',
  templateUrl: './app-root-container.component.html',
  styleUrls: ['./app-root-container.component.scss']
})
export class AppRootContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
