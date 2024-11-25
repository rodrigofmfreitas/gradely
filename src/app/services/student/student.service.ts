import { Injectable } from '@angular/core';
import { Student } from '../../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    {
      id: Math.random().toString(),
      cpf: "1",
      name: "Rodrigo",
      address: "Às Pampa",
      dateOfBirth: new Date()
    },
    {
      id: Math.random().toString(),
      cpf: "2",
      name: "Tayla",
      address: "Aquele Lá",
      dateOfBirth: new Date()
    }
  ]
  constructor() { }

  createStudent() {
    return {
      id: Math.floor(Math.random() * 1000000).toString(),
      cpf: "",
      name: "",
      address: "",
      dateOfBirth: new Date()
    }
  }

  addStudent(student: Student) {
    this.students.push(student)
  }

  getStudents() {
    return this.students
  }
}
