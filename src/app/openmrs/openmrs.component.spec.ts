import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenmrsComponent } from './openmrs.component';

describe('OpenmrsComponent', () => {
  let component: OpenmrsComponent;
  let fixture: ComponentFixture<OpenmrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenmrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenmrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
