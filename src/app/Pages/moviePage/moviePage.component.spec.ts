import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviComponent } from './movi.component';

describe('MoviComponent', () => {
  let component: MoviComponent;
  let fixture: ComponentFixture<MoviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
