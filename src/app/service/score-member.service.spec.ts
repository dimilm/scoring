import { TestBed } from '@angular/core/testing';

import { ScoreMemberService } from './score-member.service';

describe('ScoreMemberService', () => {
  let service: ScoreMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
