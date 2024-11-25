import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-select-student',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './select-student.component.html',
  styleUrl: './select-student.component.css'
})
export class SelectStudentComponent {

}
