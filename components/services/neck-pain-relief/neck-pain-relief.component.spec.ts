import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeckPainReliefComponent } from './neck-pain-relief.component';

describe('NeckPainReliefComponent', () => {
  let component: NeckPainReliefComponent;
  let fixture: ComponentFixture<NeckPainReliefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeckPainReliefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeckPainReliefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
