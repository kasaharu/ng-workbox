import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';
import { CardHarnessFilters } from './card-harness-filters';

// tslint:disable: variable-name
// tslint:disable: member-ordering
export class CardHarness extends ComponentHarness {
  static hostSelector = 'ngw-card';

  static with(options: CardHarnessFilters = {}): HarnessPredicate<CardHarness> {
    return new HarnessPredicate(CardHarness, options).addOption('title', options.title, (harness, title) =>
      HarnessPredicate.stringMatches(harness.getTitleText(), title),
    );
  }

  private _cardTitleElement = this.locatorFor('.title');
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
