import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmailsSectorsComponent } from './list-emails-sectors.component';

describe('ListEmailsSectorsComponent', () => {
  let component: ListEmailsSectorsComponent;
  let fixture: ComponentFixture<ListEmailsSectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEmailsSectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmailsSectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
