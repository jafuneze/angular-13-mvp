import { TestBed } from '@angular/core/testing';

import { ItemsPresenterService } from './items-presenter.service';

describe('ItemsPresenterService', () => {
  let service: ItemsPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
