import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ng-workbox',
  template: `
    <p>
      ng-workbox works!
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgWorkboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
