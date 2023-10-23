import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { sendMessageAction } from 'src/app/main/store/actions/send-message.action';

@Component({
  selector: 'iwnil-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private store: Store) {}

  onSend(message) {
    this.store.dispatch(sendMessageAction({ message: message }));
  }
}
