import { SchoolStudentService } from './../../services/school-student/school-student.service';
import { Component, OnInit } from '@angular/core';
import { SchoolStudent } from '../../interfaces/school-student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grades-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grades-table.component.html',
  styleUrl: './grades-table.component.css'
})
export class GradesTableComponent implements OnInit{
  protected students: SchoolStudent[] = []

  constructor(private schoolStudentService: SchoolStudentService) {}

  ngOnInit(): void {
    this.students = this.schoolStudentService.getSchoolStudents()
  }

  getTotalGrades(cpf: string) {
    return this.schoolStudentService.getTotalGrades(cpf)
  }
}
