import { TestBed } from '@angular/core/testing';

import { MenuService } from './menu.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

describe('MenuService', () => {
  let service: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, StoreModule.forRoot()],
      providers: [MenuService],
    });
    service = TestBed.inject(MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
