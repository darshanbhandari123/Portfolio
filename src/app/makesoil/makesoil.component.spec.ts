import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakesoilComponent } from './makesoil.component';

describe('MakesoilComponent', () => {
  let component: MakesoilComponent;
  let fixture: ComponentFixture<MakesoilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakesoilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakesoilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
