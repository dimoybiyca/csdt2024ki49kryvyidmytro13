import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { gameFeatureSelector } from 'src/app/game/store/selectors';
import { NewGameResponseInterface } from 'src/app/menu/types/new-game-response.interface';
import { SaveInterface } from 'src/app/menu/types/save.interface.ts';
import { GameInterface } from 'src/app/shared/types/game.interface';
import { urls } from 'src/app/shared/urls';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private game: GameInterface;

  constructor(private http: HttpClient, private store: Store) {
    this.initListeners();
  }

  private initListeners() {
    this.store
      .pipe(select(gameFeatureSelector))
      .subscribe((game) => (this.game = game));
  }

  public newGame(
    firstPlayer,
    secondPlayer,
    aiType
  ): Observable<NewGameResponseInterface> {
    let queryParams = new HttpParams();

    queryParams = queryParams.append('firstPlayer', firstPlayer);
    queryParams = queryParams.append('secondPlayer', secondPlayer);
    queryParams = queryParams.append('aiType', aiType);

    return this.http.get<NewGameResponseInterface>(urls.newGame, {
      params: queryParams,
    });
  }

  public saveGame(): Observable<NewGameResponseInterface> {
    return this.http.post<NewGameResponseInterface>(urls.save, this.game);
  }

  public allSaves(): Observable<SaveInterface[]> {
    return this.http.get<SaveInterface[]>(urls.allSaves);
  }

  public delete(id: string): Observable<{}> {
    return this.http.delete<{}>(urls.delete + id);
  }
}
