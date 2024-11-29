import { SchoolStudentService } from './../../../services/school-student/school-student.service';
import { StudentService } from './../../../services/student/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../../../interfaces/student';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent implements OnInit {
  protected student?: Student
  constructor(private route: ActivatedRoute,
              private studentService: StudentService,
              private schoolStudentService: SchoolStudentService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    const students = this.studentService.getStudents()
    this.student = students.find(student => student.id === id)
  }

  editStudent() {
    this.studentService.editStudent(this.student!)
  }

  deleteStudent() {
    this.studentService.deleteStudent(this.student!)
    this.schoolStudentService.deleteSchoolStudentByStudent(this.student!)
  }
}
