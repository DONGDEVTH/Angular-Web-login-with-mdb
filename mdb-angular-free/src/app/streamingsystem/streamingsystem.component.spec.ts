import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingsystemComponent } from './streamingsystem.component';

describe('StreamingsystemComponent', () => {
  let component: StreamingsystemComponent;
  let fixture: ComponentFixture<StreamingsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamingsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
