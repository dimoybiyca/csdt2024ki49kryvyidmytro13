import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LogoComponent } from 'src/app/shared/modules/header/components/header/logo/logo.component';
import { HeaderNavComponent } from 'src/app/shared/modules/header/components/header/header-nav/header-nav.component';
import {
  ActivatedRoute,
  RouterModule,
  convertToParamMap,
} from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  const activatedRouteStub = {
    snapshot: {
      paramMap: convertToParamMap({}),
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule],
      declarations: [HeaderComponent, LogoComponent, HeaderNavComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
