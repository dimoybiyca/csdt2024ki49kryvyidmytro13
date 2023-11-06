import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewGameResponseInterface } from 'src/app/menu/types/new-game-response.interface';
import { urls } from 'src/app/shared/urls';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  newGame(): Observable<NewGameResponseInterface> {
    return this.http.get<NewGameResponseInterface>(urls.newGame);
  }
}
