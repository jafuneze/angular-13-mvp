import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root-ui',
  templateUrl: './app-root-ui.component.html',
  styleUrls: ['./app-root-ui.component.scss']
})
export class AppRootUiComponent {
  @Input() title: string;
}
