import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachernamestudentComponent } from './teachernamestudent.component';

describe('TeachernamestudentComponent', () => {
  let component: TeachernamestudentComponent;
  let fixture: ComponentFixture<TeachernamestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachernamestudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachernamestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
