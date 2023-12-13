import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGameModeComponent } from './menu-game-mode.component';
import { StoreModule } from '@ngrx/store';
import { MenuItemComponent } from 'src/app/menu/components/menu/menu-item/menu-item.component';

describe('MenuGameModeComponent', () => {
  let component: MenuGameModeComponent;
  let fixture: ComponentFixture<MenuGameModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot()],
      declarations: [MenuGameModeComponent, MenuItemComponent],
    });
    fixture = TestBed.createComponent(MenuGameModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
