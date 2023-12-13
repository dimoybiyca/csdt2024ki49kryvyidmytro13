import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { StoreModule } from '@ngrx/store';
import { MenuItemComponent } from 'src/app/menu/components/menu/menu-item/menu-item.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot()],
      declarations: [MenuComponent, MenuItemComponent],
    });
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
