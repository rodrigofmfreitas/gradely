import { Component } from '@angular/core';
import { School } from '../../../interfaces/school';
import { SchoolService } from '../../../services/school/school.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-school',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './add-school.component.html',
  styleUrl: './add-school.component.css'
})
export class AddSchoolComponent {
  protected school!: School
  public types = [
    "Fundamental",
    "Médio",
    "Graduação",
    "Tecnólogo",
    "Outro"
  ]
  constructor(private route: ActivatedRoute, private schoolService: SchoolService){}

  ngOnInit(): void {
    this.school = this.schoolService.createSchool()
  }

  addSchool() {
    this.schoolService.addSchool(this.school)
  }
}
