import { Injectable } from '@angular/core';
import { SchoolStudent } from '../../interfaces/school-student';

@Injectable({
  providedIn: 'root'
})
export class SchoolStudentService {
  private schoolStudents: SchoolStudent[] = [{
    id: Math.random().toString(),
    school: {
      id: Math.random().toString(),
      cnpj: "123123123",
      name: "FUMEC",
      type: "Superior"
    },
    student: {
      id: Math.floor(Math.random() * 1000000).toString(),
      cpf: "12312312312",
      name: "Vigas Velho",
      address: "Rua da Brisa, 420",
      dateOfBirth: new Date()
    },
    grades: {
      grades: [40, 12, 21]
    },
    fos: "Front-End"
  }, {
    id: Math.floor(Math.random() * 1000000).toString(),
    school: {
      id: Math.floor(Math.random() * 1000000).toString(),
      cnpj: "123123123",
      name: "FUMEC",
      type: "Superior"
    },
    student: {
      id: Math.floor(Math.random() * 1000000).toString(),
      cpf: "12312312312",
      name: "Vigas",
      address: "Rua da Brisa, 420",
      dateOfBirth: new Date()
    },
    grades: {
      grades: [30, 32, 12]
    },
    fos: "Front-End"
  }]

  constructor() { }

  createEmptySchoolStudent() {
    return {
      id: Math.floor(Math.random() * 1000000).toString(),
      school: {
        id: "",
        cnpj: "",
        name: "",
        type: ""
      },
      student: {
        id: "",
        cpf: "",
        name: "",
        address: "",
        dateOfBirth: new Date()
      },
      grades: {
        grades: []
      },
      fos: ""
    }
  }

  createSchoolStudent(schoolStudent: SchoolStudent) {
    this.schoolStudents.push(schoolStudent)
  }

  getSchoolStudents() {
    return this.schoolStudents
  }

  getStudentByCPF(cpf: string) {
    const index = this.schoolStudents.findIndex(x => x.student.cpf === cpf)
    return this.schoolStudents[index]
  }

  getTotalGrades(cpf: string) {
    let total = 0
    const student = this.getStudentByCPF(cpf)
    for (let grade in student.grades.grades) {
      let x: number = +grade
      total = total + x
    }
    return total
  }
}
