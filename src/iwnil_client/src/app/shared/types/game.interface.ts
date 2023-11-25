import { GameStatus } from 'src/app/shared/data/game-status.enum';
import { PlayerType } from 'src/app/shared/types/player.type';

export interface GameInterface {
  board: number[][] | null;
  firstPlayer: PlayerType | null;
  secondPlayer: PlayerType | null;
  nextMove: number | null;
  aiType: string | null;
  gameStatus: GameStatus | null;
}
