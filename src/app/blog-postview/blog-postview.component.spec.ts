import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostviewComponent } from './blog-postview.component';

describe('BlogPostviewComponent', () => {
  let component: BlogPostviewComponent;
  let fixture: ComponentFixture<BlogPostviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
