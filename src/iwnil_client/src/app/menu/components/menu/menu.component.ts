import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { saveGameAction } from 'src/app/menu/store/actions/menu.action';

@Component({
  selector: 'iwnil-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private store: Store, private router: Router) {}

  onNewClick(): void {
    this.router.navigateByUrl('game-mode');
  }

  onSaveClick(): void {
    this.store.dispatch(saveGameAction());
    this.router.navigateByUrl('game');
  }

  onLoadClick(): void {
    this.router.navigateByUrl('saves');
  }
}
