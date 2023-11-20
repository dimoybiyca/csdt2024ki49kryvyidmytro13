import { environment } from 'src/environments/environment';

export const urls = {
  newGame: `${environment.serverUrl}pico/new-game`,
  move: `${environment.serverUrl}pico/move`,
  save: `${environment.serverUrl}save`,
  allSaves: `${environment.serverUrl}all-saves`,
  delete: `${environment.serverUrl}delete/`,
};
