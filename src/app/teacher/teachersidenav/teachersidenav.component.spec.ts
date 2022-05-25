import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeachersidenavComponent } from './teachersidenav.component';

describe('TeachersidenavComponent', () => {
  let component: TeachersidenavComponent;
  let fixture: ComponentFixture<TeachersidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
