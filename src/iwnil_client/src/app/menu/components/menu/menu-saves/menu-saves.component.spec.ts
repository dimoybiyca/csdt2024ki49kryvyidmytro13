import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSavesComponent } from './menu-saves.component';
import { StoreModule } from '@ngrx/store';

describe('MenuSavesComponent', () => {
  let component: MenuSavesComponent;
  let fixture: ComponentFixture<MenuSavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot()],
      declarations: [MenuSavesComponent],
    });
    fixture = TestBed.createComponent(MenuSavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
