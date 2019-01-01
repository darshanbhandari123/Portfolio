import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringRailsComponent } from './spring-rails.component';

describe('SpringRailsComponent', () => {
  let component: SpringRailsComponent;
  let fixture: ComponentFixture<SpringRailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringRailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringRailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
