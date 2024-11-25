import { Student } from './../../../interfaces/student';
import { Component } from '@angular/core';
import { SchoolStudent } from '../../../interfaces/school-student';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SchoolStudentService } from '../../../services/school-student/school-student.service';
import { SchoolService } from '../../../services/school/school.service';
import { StudentService } from '../../../services/student/student.service';
import { School } from '../../../interfaces/school';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-school-student',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-school-student.component.html',
  styleUrl: './add-school-student.component.css'
})
export class AddSchoolStudentComponent {
  protected schoolStudent!: SchoolStudent
  protected students: Student[] = []
  protected schools: School[] = []
  constructor(private route: ActivatedRoute,
              private schoolStudentService: SchoolStudentService,
              private schoolService: SchoolService,
              private studentService: StudentService){}

  ngOnInit(): void {
    this.schoolStudent = this.schoolStudentService.createEmptySchoolStudent()
    this.students = this.studentService.getStudents()
    this.schools = this.schoolService.getSchools()
  }

  addSchoolStudent() {
    this.schoolStudentService.createSchoolStudent(this.schoolStudent)
  }
}
