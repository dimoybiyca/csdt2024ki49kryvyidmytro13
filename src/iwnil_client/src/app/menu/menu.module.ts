import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { EffectsModule } from '@ngrx/effects';
import { NewGameEffect } from 'src/app/menu/store/effects/new-game.effect';

const routes = [
  {
    path: 'menu',
    component: MenuComponent,
  },
];

@NgModule({
  declarations: [MenuComponent, MenuItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([NewGameEffect]),
  ],
})
export class MenuModule {}
