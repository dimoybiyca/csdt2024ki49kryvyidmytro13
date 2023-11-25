import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardElementComponent } from './board-element.component';

describe('BoardElementComponent', () => {
  let component: BoardElementComponent;
  let fixture: ComponentFixture<BoardElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardElementComponent]
    });
    fixture = TestBed.createComponent(BoardElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
