import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbPage } from './breadcrumb.page';

describe('BreadcrumbPage', () => {
  let component: BreadcrumbPage;
  let fixture: ComponentFixture<BreadcrumbPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
