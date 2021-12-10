import { GameRound } from '../model/game-round';
import { ScoreMember } from '../model/score-member';

export const SCORE_MEMBERS: ScoreMember[] = [
  { id: 11, name: 'Opa & Oma', score: 0 },
  { id: 20, name: 'Tante Katja', score: 0 },
  { id: 13, name: 'Fedja', score: -1 },
  { id: 14, name: 'Katja', score: 2 },
  { id: 15, name: 'Katja (Fedjas Frau)', score: 2 },
  { id: 16, name: 'Lisa', score: 2 },
  { id: 17, name: 'Polina', score: 2 },
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
    solution:
      '5L-Eimer voll füllen, dann ihn in 3L-Eimer giessen bis 3L-Eimer komplett voll wird. 3L-Eimer leeren, nun die restlichen 2L aus dem 5L-Eimer in den leeren 3L-Eimer eingiessen. 5L-Eimer voll füllen und daraus das Wasse in den 3L-Eimer eingiessen bis er nun komplett voll wird. Es bleiben 4L im 5L-Eimer übrig.',
    winner: ['Katja', 'Christian', 'Polina', 'Katja (FF)', 'Lisa']
  },

  {
    id: 2,
    name: 'Runde 2',
    date: '10.12.2021',
    order: 2,
    task: 'Hier stehen Polina, Lisa, Christian und Mischa mit warmen Mützen. Sie wissen, dass es 2 rote und 2 blau Mützen gibt, aber sie wissen nicht welche sie anhaben. Polina sieht vor sich Lisa und Christian, Lisa sieht nur Christian und Christian mit Mischa sehen nur die Wand. Frage: Wer als erster sagt ganz genau welche Farbe seine Mütze hat?',
    solution: '',
    winner: ['Katja', 'Polina', 'Katja (FF)', 'Lisa']
  }
];
