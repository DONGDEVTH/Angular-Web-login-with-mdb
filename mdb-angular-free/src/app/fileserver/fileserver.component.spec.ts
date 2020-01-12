import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileserverComponent } from './fileserver.component';

describe('FileserverComponent', () => {
  let component: FileserverComponent;
  let fixture: ComponentFixture<FileserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
