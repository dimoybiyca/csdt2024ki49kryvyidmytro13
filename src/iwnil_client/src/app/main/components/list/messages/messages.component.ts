import { Component, Input } from '@angular/core';
import { MessageInterface } from 'src/app/main/types/message.interface';

@Component({
  selector: 'iwnil-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  @Input('message') messageProps: MessageInterface;
}
