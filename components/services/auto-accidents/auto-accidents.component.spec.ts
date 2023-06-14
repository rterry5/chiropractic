import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoAccidentsComponent } from './auto-accidents.component';

describe('AutoAccidentsComponent', () => {
  let component: AutoAccidentsComponent;
  let fixture: ComponentFixture<AutoAccidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoAccidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoAccidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
