import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../interfaces/student';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StudentService } from '../../../services/student/student.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  protected student!: Student
  constructor(private route: ActivatedRoute, private studentService: StudentService){}

  ngOnInit(): void {
    this.student = this.studentService.createStudent()
  }

  addStudent() {
    this.studentService.addStudent(this.student)
  }
}
