import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSavesComponent } from './menu-saves.component';

describe('MenuSavesComponent', () => {
  let component: MenuSavesComponent;
  let fixture: ComponentFixture<MenuSavesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSavesComponent]
    });
    fixture = TestBed.createComponent(MenuSavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
