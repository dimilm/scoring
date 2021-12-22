import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { GameRound } from '../model/game-round';
import { ScoreMember } from '../model/score-member';

export const SCORE_MEMBERS: ScoreMember[] = [
  { id: 11, name: 'Opa & Oma', score: 1 },
  { id: 20, name: 'Tante Katja', score: 0 },
  { id: 13, name: 'Fedja', score: -1 },
  { id: 14, name: 'Katja', score: 6 },
  { id: 15, name: 'Katja (Fedjas Frau)', score: 6 },
  { id: 16, name: 'Lisa', score: 5 },
  { id: 17, name: 'Polina', score: 6 },
  { id: 18, name: 'Mischa', score: 0 },
  { id: 19, name: 'Christian', score: 3 }
];

export const GAME_ROUNDS: GameRound[] = [
  {
    id: 1,
    name: 'Runde 1',
    date: '09.12.2021',
    order: 1,
    task: 'Wie kann man mit 2 Eimern (5 Liter und 3 Liter) ganau 4 Liter abmessen?',
    solution:
      '5L-Eimer voll füllen, dann ihn in 3L-Eimer gießen bis 3L-Eimer komplett voll wird. 3L-Eimer leeren, nun die restlichen 2L aus dem 5L-Eimer in den leeren 3L-Eimer gießen. 5L-Eimer voll füllen und daraus das Wasser in den 3L-Eimer gießen bis er voll wird. Es bleiben 4L im 5L-Eimer übrig - voila ;-).',
    winner: ['Katja', 'Christian', 'Polina', 'Katja (FF)', 'Lisa']
  },

  {
    id: 2,
    name: 'Runde 2',
    date: '10.12.2021',
    order: 2,
    task: 'Hier stehen Polina, Lisa, Christian und Mischa mit warmen Mützen. Sie wissen, dass es 2 rote und 2 blau Mützen gibt, aber sie wissen nicht welche sie anhaben. Polina sieht vor sich Lisa und Christian, Lisa sieht nur Christian und Christian mit Mischa sehen nur die Wand. Frage: Wer als erster sagt ganz genau welche Farbe seine Mütze hat?',
    solution:
      'Polina sieht 2 Mützen vor sich und schweigt. Da Polina nichts sagt, weiß Lisa, dass vor Polina beide Mützen unterschiedliche Farben haben müssten, dadurch kann Lisa ihre Farbe genau rausfinden.',
    winner: ['Katja', 'Polina', 'Katja (FF)', 'Lisa']
  },
  {
    id: 3,
    name: 'Runde 3',
    date: '11.12.2021',
    order: 3,
    task: 'Ein kleiner Chinese schaut sich folgende Rechnung nachdenklich an: 3+5+5+5+7=560. Ist es möglich mit nur einem Strich diesen Term so zu ergänzen, dass er korrekt wird?',
    winner: ['Opa & Oma', 'Katja', 'Katja (FF)', 'Christian', 'Lisa', 'Polina'],
    solution:
      '3+5+5+547=560 oder 3+5+545+7=560 oder 3+545+5+7=560 oder 3+5+5+5+7&ne;560'
  },
  {
    id: 4,
    name: 'Runde 4',
    date: '12.12.2021',
    order: 4,
    task: 'Heute aus der Reihe der Sequenzen ;-). Was steht hinter dem Fragezeichen?<font color="red"> Es ist keine 6!</font> <table> <tr><th>1</th><th>3</th><th>5</th></tr> <tr><th>2</th> <th>4</th><th>?</th></tr></table>',
    winner: ['Katja', 'Christian', 'Polina', 'Katja (FF)', 'Lisa'],
    solution:
      ' <table> <tr><th>1</th><th>3</th><th>5</th></tr> <tr><th>2</th> <th>4</th><th>R</th></tr></table>'
  },
  {
    id: 5,
    name: 'Runde 5',
    date: '20.12.2021',
    order: 5,
    task: 'Was kommt als nächstes? Bestimme die nächste Zahl: 4, 5, 9, 5, 14, 5, ...',
    winner: ['Katja', 'Katja (FF)', 'Polina'],
    solution: '19, 5, 24, 5, 29 ...'
  },
  {
    id: 6,
    name: 'Runde 6',
    date: '21.12.2021',
    order: 6,
    task: 'In welcher Spalte ist die graue Farbe dunkler, Spalte 1 oder Spalte 2?',
    winner: ['Katja', 'Katja (FF)', 'Polina', 'Lisa'],
    solution: 'In den beiden Spalten ist die Farbe grau gleich'
  },
  {
    id: 7,
    name: 'Runde 7',
    date: '22.12.2021',
    order: 7,
    task: 'Das gelbe Rad ist fest und kann sich nicht drehen, das rote Rad rollt an dem gelben ab. Wieviele mal hat es sich nach einer Runde um die eigene Achse gedreht?',
    winner: []
  }
];
