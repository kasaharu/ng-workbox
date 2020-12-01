import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '@kasaharu/ng-workbox/components';
import { HeaderHarness } from '@kasaharu/ng-workbox/components/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let loader: HarnessLoader;
  let app: AppComponent;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent, HeaderComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      loader = TestbedHarnessEnvironment.loader(fixture);
      app = fixture.componentInstance;
    }),
  );

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-workbox'`, () => {
    expect(app.title).toEqual('ng-workbox');
  });

  it(`should have the HeaderComponent`, async () => {
    const headerHarness = await loader.getHarness(HeaderHarness);

    expect(headerHarness).toBeTruthy();
  });

  it(`should show as title 'ng-workbox'`, async () => {
    const headerHarness = await loader.getHarness(HeaderHarness);
    const title = await headerHarness.getTitleText();

    expect(title).toBe(app.title);
  });
});
