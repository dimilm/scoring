import { Injectable } from '@angular/core';
import { SCORE_MEMBERS } from '../mock/mock-score';
import { ScoreMember } from '../model/score-member';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreMemberService {

  constructor() { }

  getScoreMembers(): Observable<ScoreMember[]> {
    const members = of( SCORE_MEMBERS.sort(function(obj1, obj2) {
      return obj2.score - obj1.score;
   }));
   return members;
   
  }


}
