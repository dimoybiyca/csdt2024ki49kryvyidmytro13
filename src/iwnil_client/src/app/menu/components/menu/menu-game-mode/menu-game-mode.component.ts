import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { newGameAction } from 'src/app/menu/store/actions/menu.action';
import { isLoadingSelector } from 'src/app/menu/store/selectors';
import { PlayerType } from 'src/app/shared/types/player.type';

@Component({
  selector: 'iwnil-menu-game-mode',
  templateUrl: './menu-game-mode.component.html',
  styleUrls: ['./menu-game-mode.component.scss'],
})
export class MenuGameModeComponent {
  isTwoAIclicked: boolean = false;

  constructor(private store: Store, private router: Router) {}

  onTwoAIClick(aiType) {
    this.dispatchNewMove('AI', 'AI', aiType);
  }

  onPlayerVsAIClick(aiType) {
    this.dispatchNewMove('MAN', 'AI', aiType);
  }

  onTwoPlayersClick() {
    this.dispatchNewMove('MAN', 'MAN', 'RANDOM');
  }

  private dispatchNewMove(
    firstPlayer: PlayerType,
    secondPlayer: PlayerType,
    aiType: string
  ) {
    this.store.dispatch(
      newGameAction({
        firstPlayer: firstPlayer,
        secondPlayer: secondPlayer,
        aiType,
      })
    );

    this.store.pipe(select(isLoadingSelector)).subscribe((isLoading) => {
      console.log(isLoading);

      if (!isLoading) {
        this.router.navigateByUrl('game');
      }
    });
  }
}
