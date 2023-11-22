import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveItemComponent } from './save-item.component';
import { StoreModule } from '@ngrx/store';
import { SaveInterface } from 'src/app/menu/types/save.interface.ts';
import { GameStatus } from 'src/app/shared/data/game-status.enum';

describe('SaveItemComponent', () => {
  const testSave: SaveInterface = {
    firstPlayer: 'MAN',
    secondPlayer: 'MAN',
    nextMove: 0,
    aiType: '',
    gameStatus: GameStatus.NEW,
    id: '',
    board: [],
  };

  let component: SaveItemComponent;
  let fixture: ComponentFixture<SaveItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot()],
      declarations: [SaveItemComponent],
    });
    fixture = TestBed.createComponent(SaveItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.saveProps = testSave;
    expect(component).toBeTruthy();
  });
});
