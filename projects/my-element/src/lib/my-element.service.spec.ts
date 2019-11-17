import { TestBed } from '@angular/core/testing';

import { MyElementService } from './my-element.service';

describe('MyElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyElementService = TestBed.get(MyElementService);
    expect(service).toBeTruthy();
  });
});
