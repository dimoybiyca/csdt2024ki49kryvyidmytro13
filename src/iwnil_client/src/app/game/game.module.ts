import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game/game.component';
import { RouterModule } from '@angular/router';
import { ScoreComponent } from './components/game/score/score.component';
import { BoardComponent } from './components/game/board/board.component';
import { BoardElementComponent } from './components/game/board/board-element/board-element.component';

const routes = [
  {
    path: 'game',
    component: GameComponent,
  },
];

@NgModule({
  declarations: [GameComponent, ScoreComponent, BoardComponent, BoardElementComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GameModule {}
