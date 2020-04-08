import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderHarness } from 'projects/ng-workbox/components/testing/src/public_api';
import { HeaderComponent } from './header.component';

@Component({
  template: `
    <ngw-header>
      <p id="headerTitle">{{ title }}</p>
    </ngw-header>
  `,
})
class HostComponent {
  title = 'TestComponentTitle';
}

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HostComponent>;
  let hostComponent: HostComponent;
  let loader: HarnessLoader;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, HostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', async () => {
    const headerHarness = await loader.getHarness(HeaderHarness);
    expect(headerHarness).toBeTruthy();
  });

  it('get title', async () => {
    const headerHarness = await loader.getHarness(HeaderHarness);
    const title = await headerHarness.getTitleText();
    expect(title).toBe(hostComponent.title);
  });
});
