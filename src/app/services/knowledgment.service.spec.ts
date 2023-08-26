import { TestBed } from '@angular/core/testing';

import { KnowledgmentService } from './knowledgment.service';

describe('KnowledgmentService', () => {
  let service: KnowledgmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KnowledgmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
