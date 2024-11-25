import { Student } from './../../../interfaces/student';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StudentService } from '../../../services/student/student.service';

@Component({
  selector: 'app-select-student',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './select-student.component.html',
  styleUrl: './select-student.component.css'
})
export class SelectStudentComponent {
  protected students: Student[] = []

  constructor(private active: ActivatedRoute, private studentService: StudentService){}

  ngOnInit(): void {
    this.students = this.studentService.getStudents()
  }
}
