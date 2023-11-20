import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { EffectsModule } from '@ngrx/effects';
import { NewGameEffect } from 'src/app/menu/store/effects/new-game.effect';
import { MenuGameModeComponent } from './components/menu/menu-game-mode/menu-game-mode.component';
import { StoreModule } from '@ngrx/store';
import { menuReducers } from 'src/app/menu/store/reducers';
import { MenuSavesComponent } from './components/menu/menu-saves/menu-saves.component';
import { SaveItemComponent } from './components/menu/menu-saves/save-item/save-item.component';
import { SaveGameEffect } from 'src/app/menu/store/effects/save-game.effect';
import { LoadSavesEffect } from 'src/app/menu/store/effects/load-saves.effect';
import { DeleteSaveEffect } from 'src/app/menu/store/effects/delete-save.effect';

const routes = [
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'game-mode',
    component: MenuGameModeComponent,
  },
  {
    path: 'saves',
    component: MenuSavesComponent,
  },
];

@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent,
    MenuGameModeComponent,
    MenuSavesComponent,
    SaveItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('menu', menuReducers),
    EffectsModule.forFeature([
      NewGameEffect,
      SaveGameEffect,
      LoadSavesEffect,
      DeleteSaveEffect,
    ]),
  ],
})
export class MenuModule {}
