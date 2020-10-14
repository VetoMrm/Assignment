import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftexamComponent } from './draftexam.component';

describe('DraftexamComponent', () => {
  let component: DraftexamComponent;
  let fixture: ComponentFixture<DraftexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
