import { Injectable } from '@angular/core';
import { Student } from '../../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = []
  constructor() { }
}
