import { SaveInterface } from 'src/app/menu/types/save.interface.ts';

export interface MenuStateInterface {
  isLoading: boolean;
  saves: SaveInterface[];
}
