import { TestBed } from '@angular/core/testing';
import { Sinsonservice } from './sinsonservice';

describe('Sinsonservice', () => {
  let service: Sinsonservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sinsonservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
