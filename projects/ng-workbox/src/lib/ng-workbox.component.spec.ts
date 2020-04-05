import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgWorkboxComponent } from './ng-workbox.component';

describe('NgWorkboxComponent', () => {
  let component: NgWorkboxComponent;
  let fixture: ComponentFixture<NgWorkboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgWorkboxComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgWorkboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
