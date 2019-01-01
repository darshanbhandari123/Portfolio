import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertizaComponent } from './expertiza.component';

describe('ExpertizaComponent', () => {
  let component: ExpertizaComponent;
  let fixture: ComponentFixture<ExpertizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
