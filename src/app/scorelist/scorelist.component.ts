import { Component, OnInit } from '@angular/core';
import { SCORE_MEMBERS } from '../mock/mock-score';
import { ScoreMember } from '../model/score-member';
import { ScoreMemberService } from '../service/score-member.service';

@Component({
  selector: 'app-scorelist',
  templateUrl: './scorelist.component.html',
  styleUrls: ['./scorelist.component.scss']
})
export class ScorelistComponent implements OnInit {

  
  members: ScoreMember[] = [];
  selectedMember!: ScoreMember;

  constructor(private scoreMemberService: ScoreMemberService) { 
    
  }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers():void{
    this.members = this.scoreMemberService.getScoreMembers();
  }

  onSelect(member: ScoreMember): void {
    this.selectedMember = member;
  }

}
