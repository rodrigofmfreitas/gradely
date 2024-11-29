import { StudentService } from './../student/student.service';
import { SchoolService } from './../school/school.service';
import { Injectable } from '@angular/core';
import { SchoolStudent } from '../../interfaces/school-student';
import { Student } from '../../interfaces/student';
import { School } from '../../interfaces/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolStudentService {
  private schoolStudents: SchoolStudent[] = [{
    id: Math.floor(Math.random() * 1000000000).toString(),
    school: this.schoolService.getSchools()[1],
    student: this.studentService.getStudents()[0],
    grades: {
      grades: [40, 12, 21]
    },
    fos: "Front-End"
  }, {
    id: Math.floor(Math.random() * 1000000000).toString(),
    school: this.schoolService.getSchools()[0],
    student: this.studentService.getStudents()[1],
    grades: {
      grades: [30, 32, 12]
    },
    fos: "Front-End"
  }]

  constructor(private schoolService: SchoolService, private studentService: StudentService) { }

  createEmptySchoolStudent() {
    return {
      id: Math.floor(Math.random() * 1000000000).toString(),
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

  deleteSchoolStudentByStudent(student: Student) {
    this.schoolStudents = this.schoolStudents.filter((x) => x.student.id !== student.id)
  }

  deleteSchoolStudentBySchool(school: School) {
    this.schoolStudents = this.schoolStudents.filter((x) => x.school.id !== school.id)
  }
}
