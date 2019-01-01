import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferManagementComponent } from './buffer-management.component';

describe('BufferManagementComponent', () => {
  let component: BufferManagementComponent;
  let fixture: ComponentFixture<BufferManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BufferManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
