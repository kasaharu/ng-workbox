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

  async hasDescription(): Promise<boolean> {
    // NOTE: _cardDescriptionElement が取得できない場合は error が throw される
    try {
      await this._cardDescriptionElement();
      return true;
    } catch {
      return false;
    }
  }

  async getDescriptionText(): Promise<string> {
    const hasDescription = await this.hasDescription();
    return hasDescription ? (await this._cardDescriptionElement()).text() : '';
  }
}
