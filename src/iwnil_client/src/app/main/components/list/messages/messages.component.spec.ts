import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';
import { MessageInterface } from 'src/app/main/types/message.interface';

describe('MessagesComponent', () => {
  const testMessage: MessageInterface = {
    send: 'Sender',
    receive: 'Receiver',
  };

  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessagesComponent],
    });
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.messageProps = testMessage;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('message should be visible', () => {
    component.messageProps = testMessage;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain(
      testMessage.send
    );
    expect(compiled.querySelector('div').textContent).toContain(
      testMessage.receive
    );
  });
});
