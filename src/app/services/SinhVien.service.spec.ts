/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SinhVienService } from './SinhVien.service';

describe('Service: SinhVien', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SinhVienService]
    });
  });

  it('should ...', inject([SinhVienService], (service: SinhVienService) => {
    expect(service).toBeTruthy();
  }));
});
