import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardHarness } from 'projects/ng-workbox/components/testing/src/lib/card/card-harness';
import { CardComponent } from './card.component';

@Component({
  template: `<div>
    <ngw-card [title]="title1" [description]="description1">
      <div id="ngwCardActions"><a href="/">fuga</a></div>
    </ngw-card>
    <ngw-card [title]="title2" [description]="description2">
      <div id="ngwCardActions"><a href="/">fuga</a></div>
    </ngw-card>
  </div>`,
})
class HostComponent {
  title1 = 'Sample';
  description1 = '';

  title2 = 'Sample 2';
  description2 = 'has description';
}

describe('CardComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  let hostComponent: HostComponent;
  let loader: HarnessLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, HostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  describe('Sample', () => {
    let cardHarness: CardHarness;
    beforeEach(async () => {
      cardHarness = await loader.getHarness(CardHarness.with({ title: 'Sample' }));
    });

    it('should create CardHarness instance', async () => {
      expect(cardHarness).toBeTruthy();
    });

    it('title is `Sample`', async () => {
      const title = await cardHarness.getTitleText();
      expect(title).toBe('Sample');
    });

    it('not have description', async () => {
      const hasDescription = await cardHarness.hasDescription();
      expect(hasDescription).toBe(false);
    });

    it('set description', async () => {
      hostComponent.description1 = 'set description';
      const hasDescription = await cardHarness.hasDescription();
      expect(hasDescription).toBe(true);
    });
  });

  describe('Sample 2', () => {
    let cardHarness: CardHarness;
    beforeEach(async () => {
      cardHarness = await loader.getHarness(CardHarness.with({ title: 'Sample 2' }));
    });

    it('title is `Sample 2`', async () => {
      const title = await cardHarness.getTitleText();
      expect(title).toBe('Sample 2');
    });

    it('has description', async () => {
      const hasDescription = await cardHarness.hasDescription();
      expect(hasDescription).toBe(true);
    });

    it('description is `has description`', async () => {
      const description = await cardHarness.getDescriptionText();
      expect(description).toBe('has description');
    });
  });
});
