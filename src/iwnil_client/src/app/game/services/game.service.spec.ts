/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GameService } from './game.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

describe('Service: Game', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot()],
      providers: [GameService],
    });
  });

  it('should ...', inject([GameService], (service: GameService) => {
    expect(service).toBeTruthy();
  }));
});
