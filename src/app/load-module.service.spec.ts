import { TestBed, inject } from '@angular/core/testing';

import { LoadModuleService } from './load-module.service';

describe('LoadModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadModuleService]
    });
  });

  it('should be created', inject([LoadModuleService], (service: LoadModuleService) => {
    expect(service).toBeTruthy();
  }));
});
