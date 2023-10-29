import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { messagesSelector } from 'src/app/main/store/selectors';
import { MessageInterface } from 'src/app/main/types/message.interface';

@Component({
  selector: 'iwnil-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  $messages: Observable<MessageInterface[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initListeners();
  }

  initListeners() {
    this.$messages = this.store.pipe(select(messagesSelector));
  }
}
