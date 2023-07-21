/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SubService } from './Sub.service';

describe('Service: Sub', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubService]
    });
  });

  it('should ...', inject([SubService], (service: SubService) => {
    expect(service).toBeTruthy();
  }));
});
