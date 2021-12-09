import { Injectable } from '@angular/core';
import { SCORE_MEMBERS } from '../mock/mock-score-members';
import { ScoreMember } from '../model/score-member';

@Injectable({
  providedIn: 'root'
})
export class ScoreMemberService {

  constructor() { }

  getScoreMembers(): ScoreMember[] {
    return SCORE_MEMBERS;
  }

}
