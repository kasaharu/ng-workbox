import { TestBed } from '@angular/core/testing';

import { NgWorkboxService } from './ng-workbox.service';

describe('NgWorkboxService', () => {
  let service: NgWorkboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgWorkboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
