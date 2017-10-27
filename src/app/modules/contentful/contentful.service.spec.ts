import { TestBed, inject } from '@angular/core/testing';

import { ContentfulService } from './contentful.service';

describe('ContentfulService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentfulService]
    });
  });

  it('should be created', inject([ContentfulService], (service: ContentfulService) => {
    expect(service).toBeTruthy();
  }));
});
