import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CncPageComponent } from './cnc-page.component';

describe('CncPageComponent', () => {
  let component: CncPageComponent;
  let fixture: ComponentFixture<CncPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CncPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CncPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
