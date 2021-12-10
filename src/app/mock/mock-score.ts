import { GameRound } from '../model/game-round';
import { ScoreMember } from '../model/score-member';

export const SCORE_MEMBERS: ScoreMember[] = [
  { id: 11, name: 'Opa & Oma', score: 0 },
  { id: 20, name: 'Tante Katja', score: 0 },
  { id: 13, name: 'Fedja', score: -1 },
  { id: 14, name: 'Katja', score: 2 },
  { id: 15, name: 'Katja (Fedjas Frau)', score: 1 },
  { id: 16, name: 'Lisa', score: 1 },
  { id: 17, name: 'Polina', score: 1 },
  { id: 18, name: 'Mischa', score: 0 },
  { id: 19, name: 'Christian', score: 1 }
];

export const GAME_ROUNDS: GameRound[] = [
  {
    id: 1,
    name: 'Runde 1',
    date: '09.12.2021',
    order: 1,
    task: 'Wie kann man mit 2 Eimern (5 Liter und 3 Liter) ganau 4 Liter abmessen?',
    winner: ['Katja', 'Christian', 'Polina', 'Katja (FF)', 'Lisa']
  },

  {
    id: 2,
    name: 'Runde 2',
    date: '10.12.2021',
    order: 2,
    task: 'Hier stehen Polina, Lisa, Christian und Mischa mit warmen Mützen. Sie wissen, dass es 2 rote und 2 blau Mützen gibt, aber sie wissen nicht welche sie anhaben. Polina sieht vor sich Lisa und Christian, Lisa sieht nur Christian und Christian mit Mischa sehen nur die Wand. Frage: Wer als erster sagt ganz genau welche Farbe seine Mütze hat?',
    winner: ['Katja']
  }
];
