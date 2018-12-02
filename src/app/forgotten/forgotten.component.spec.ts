import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgottenComponent } from './forgotten.component';

describe('ForgottenComponent', () => {
  let component: ForgottenComponent;
  let fixture: ComponentFixture<ForgottenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgottenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgottenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
