import { ComponentHarness } from '@angular/cdk/testing';

export class CardHarness extends ComponentHarness {
  static hostSelector = 'ngw-card';

  // tslint:disable-next-line: variable-name
  private _cardTitleElement = this.locatorFor('.title');
  // tslint:disable-next-line: variable-name
  private _cardDescriptionElement = this.locatorFor('.description');

  async getTitleText(): Promise<string> {
    return (await this._cardTitleElement()).text();
  }

  async getDescriptionText(): Promise<string> {
    // NOTE: _cardDescriptionElement は条件によって生成されていない場合があるため catch が必要
    try {
      return (await this._cardDescriptionElement()).text();
    } catch {
      return '';
    }
  }
}
