import { TestBed } from '@angular/core/testing';

import { ScrollReveal } from './scroll-reveal';

describe('ScrollReveal', () => {
  let service: ScrollReveal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollReveal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
