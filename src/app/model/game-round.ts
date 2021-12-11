export interface GameRound {
  id: number;
  name: string;
  date: string;
  order: number;
  task: string;
  solution?: string;
  winner: string[];
}
