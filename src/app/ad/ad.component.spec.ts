import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADComponent } from './ad.component';

describe('ADComponent', () => {
  let component: ADComponent;
  let fixture: ComponentFixture<ADComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
