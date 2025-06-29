import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStudentComponent } from './select-student.component';

describe('SelectStudentComponent', () => {
  let component: SelectStudentComponent;
  let fixture: ComponentFixture<SelectStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
