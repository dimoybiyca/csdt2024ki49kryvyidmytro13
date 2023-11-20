import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGameModeComponent } from './menu-game-mode.component';

describe('MenuGameModeComponent', () => {
  let component: MenuGameModeComponent;
  let fixture: ComponentFixture<MenuGameModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuGameModeComponent]
    });
    fixture = TestBed.createComponent(MenuGameModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
