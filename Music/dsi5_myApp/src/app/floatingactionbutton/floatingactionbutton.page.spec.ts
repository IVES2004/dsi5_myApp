import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloatingactionbuttonPage } from './floatingactionbutton.page';

describe('FloatingactionbuttonPage', () => {
  let component: FloatingactionbuttonPage;
  let fixture: ComponentFixture<FloatingactionbuttonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingactionbuttonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
