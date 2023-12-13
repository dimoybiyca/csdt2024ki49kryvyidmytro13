import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavComponent } from './header-nav.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderNavComponent', () => {
  let component: HeaderNavComponent;
  let fixture: ComponentFixture<HeaderNavComponent>;

  const activatedRouteStub = {
    snapshot: {
      paramMap: convertToParamMap({}),
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderNavComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub }],
    });
    fixture = TestBed.createComponent(HeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
