import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game/game.component';
import { RouterModule } from '@angular/router';
import { ScoreComponent } from './components/game/score/score.component';
import { BoardComponent } from './components/game/board/board.component';
import { BoardElementComponent } from './components/game/board/board-element/board-element.component';
import { StoreModule } from '@ngrx/store';
import { gameReducers } from 'src/app/game/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { MoveEffect } from 'src/app/game/store/effects/send-message.effect';

const routes = [
  {
    path: 'game',
    component: GameComponent,
  },
];

@NgModule({
  declarations: [
    GameComponent,
    ScoreComponent,
    BoardComponent,
    BoardElementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('game', gameReducers),
    EffectsModule.forFeature([MoveEffect]),
  ],
})
export class GameModule {}
