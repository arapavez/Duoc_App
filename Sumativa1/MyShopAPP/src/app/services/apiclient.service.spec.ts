import { TestBed } from '@angular/core/testing';

import { ApiclientService } from './apiclient.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ApiclientService', () => {
  let service: ApiclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(ApiclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
