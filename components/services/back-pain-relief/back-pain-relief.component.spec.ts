import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackPainReliefComponent } from './back-pain-relief.component';

describe('BackPainReliefComponent', () => {
  let component: BackPainReliefComponent;
  let fixture: ComponentFixture<BackPainReliefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackPainReliefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackPainReliefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
