import { Injectable } from '@angular/core';
import { SchoolStudent } from '../../interfaces/school-student';
import { Student } from '../../interfaces/student';
import { School } from '../../interfaces/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolStudentService {
  private schoolStudents: SchoolStudent[] = [{
    school: {
      cnpj: "123123123",
      name: "FUMEC",
      type: "Superior"
    },
    student: {
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
    school: {
      cnpj: "123123123",
      name: "FUMEC",
      type: "Superior"
    },
    student: {
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

  createSchool() {
    return {
      cnpj: "",
      name: "",
      type: ""
    }
  }

  createStudent() {
    return {
      cpf: "",
      name: "",
      address: "",
      dateOfBirth: new Date()}
  }

  createSchoolStudent(school: School, student: Student) {
    return {
      school: school,
      student: student,
      grades: [],
      fos: ""
    }
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
