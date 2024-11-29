import { SchoolStudentService } from './../../../services/school-student/school-student.service';
import { Component, OnInit } from '@angular/core';
import { School } from '../../../interfaces/school';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SchoolService } from '../../../services/school/school.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-school',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-school.component.html',
  styleUrl: './edit-school.component.css'
})
export class EditSchoolComponent implements OnInit {
  protected school?: School
  constructor(private route: ActivatedRoute,
              private schoolService: SchoolService,
              private schoolStudentService: SchoolStudentService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    const schools = this.schoolService.getSchools()
    this.school = schools.find(school => school.id === id)
  }

  editSchool() {
    this.schoolService.editSchool(this.school!)
  }

  deleteSchool() {
    this.schoolService.deleteSchool(this.school!)
    this.schoolStudentService.deleteSchoolStudentBySchool(this.school!)
  }
}
