import { ComponentHarness } from '@angular/cdk/testing';

export class HeaderHarness extends ComponentHarness {
  static hostSelector = 'ngw-header';

  // tslint:disable-next-line: variable-name
  protected _getTitleElement = this.locatorFor('h1');

  async getTitleText() {
    const titleElement = await this._getTitleElement();
    return titleElement?.text();
  }
}
