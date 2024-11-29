import { Injectable } from '@angular/core';
import { Student } from '../../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      cpf: Math.floor(Math.random() * (100000000000 - 10000000000) + 10000000000).toString(),
      name: "Rodrigo",
      address: "Às Pampa",
      dateOfBirth: new Date()
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      cpf: Math.floor(Math.random() * (100000000000 - 10000000000) + 10000000000).toString(),
      name: "Tayla",
      address: "Aquele Lá",
      dateOfBirth: new Date()
    }
  ]
  constructor() { }

  createStudent() {
    return {
      id: Math.floor(Math.random() * 1000000000).toString(),
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

  editStudent(student: Student) {
    const index = this.students.findIndex(x => x.id === student.id)
    this.students[index] = student
  }

  deleteStudent(student: Student) {
    this.students = this.students.filter((x) => x.id !== student.id)
  }
}
