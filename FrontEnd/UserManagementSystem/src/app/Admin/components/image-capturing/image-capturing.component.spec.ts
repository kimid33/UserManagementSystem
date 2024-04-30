import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCapturingComponent } from './image-capturing.component';

describe('ImageCapturingComponent', () => {
  let component: ImageCapturingComponent;
  let fixture: ComponentFixture<ImageCapturingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageCapturingComponent]
    });
    fixture = TestBed.createComponent(ImageCapturingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
