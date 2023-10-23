import { MessageInterface } from 'src/app/main/types/message.interface';

export interface MainStateInterface {
  isLoadingMessage: boolean;
  message: string;
  messages: MessageInterface[];
}
