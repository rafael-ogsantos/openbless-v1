import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmemAndamentoComponent } from './emAndamento.component';

describe('CrmemAndamentoComponent', () => {
  let component: CrmemAndamentoComponent;
  let fixture: ComponentFixture<CrmemAndamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmemAndamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmemAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
