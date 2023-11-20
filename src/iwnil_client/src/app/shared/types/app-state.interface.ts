import { GameStateInterface } from 'src/app/game/types/game-state.interface';
import { MainStateInterface } from 'src/app/main/types/main-state.interface';
import { MenuStateInterface } from 'src/app/menu/types/menu-state.interface';

export interface AppStateInterface {
  main: MainStateInterface;
  game: GameStateInterface;
  menu: MenuStateInterface;
}
