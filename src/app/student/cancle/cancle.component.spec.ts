import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancleComponent } from './cancle.component';

describe('CancleComponent', () => {
  let component: CancleComponent;
  let fixture: ComponentFixture<CancleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
