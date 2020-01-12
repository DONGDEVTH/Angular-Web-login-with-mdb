import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemmonitoringComponent } from './systemmonitoring.component';

describe('SystemmonitoringComponent', () => {
  let component: SystemmonitoringComponent;
  let fixture: ComponentFixture<SystemmonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemmonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemmonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
