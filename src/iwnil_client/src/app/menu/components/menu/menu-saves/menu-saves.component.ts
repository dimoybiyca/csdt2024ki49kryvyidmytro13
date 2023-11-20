import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadSavesAction } from 'src/app/menu/store/actions/menu.action';
import { savesSelector } from 'src/app/menu/store/selectors';
import { SaveInterface } from 'src/app/menu/types/save.interface.ts';

@Component({
  selector: 'iwnil-menu-saves',
  templateUrl: './menu-saves.component.html',
  styleUrls: ['./menu-saves.component.scss'],
})
export class MenuSavesComponent implements OnInit {
  $saves: Observable<SaveInterface[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchData();
    this.initValues();
  }

  fetchData() {
    this.store.dispatch(loadSavesAction());
  }

  initValues() {
    this.$saves = this.store.pipe(select(savesSelector));
  }
}
