import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsInjuriesComponent } from './sports-injuries.component';

describe('SportsInjuriesComponent', () => {
  let component: SportsInjuriesComponent;
  let fixture: ComponentFixture<SportsInjuriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsInjuriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsInjuriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
