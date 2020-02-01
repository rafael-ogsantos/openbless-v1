import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Crm2Component } from './crmNovo.component';

describe('Crm2Component', () => {
  let component: Crm2Component;
  let fixture: ComponentFixture<Crm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Crm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Crm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
