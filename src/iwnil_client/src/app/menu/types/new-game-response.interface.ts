import { GameStatus } from 'src/app/shared/data/game-status.enum';
import { PlayerType } from 'src/app/shared/types/player.type';

export interface NewGameResponseInterface {
  firstPlayer: PlayerType;
  secondPlayer: PlayerType;
  nextMove: number;
  gameStatus: GameStatus;
  board: number[][];
}
