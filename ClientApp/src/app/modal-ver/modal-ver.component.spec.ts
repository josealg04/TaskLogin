import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVerComponent } from './modal-ver.component';

describe('ModalVerComponent', () => {
  let component: ModalVerComponent;
  let fixture: ComponentFixture<ModalVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
