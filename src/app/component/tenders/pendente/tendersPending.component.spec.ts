import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tendersPendente } from './tendersPending.component';

describe('tendersPendente', () => {
  let component: tendersPendente;
  let fixture: ComponentFixture<tendersPendente>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tendersPendente ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tendersPendente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
