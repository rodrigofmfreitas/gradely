import { StudentService } from './../student/student.service';
import { SchoolService } from './../school/school.service';
import { Injectable } from '@angular/core';
import { SchoolStudent } from '../../interfaces/school-student';
import { Student } from '../../interfaces/student';
import { School } from '../../interfaces/school';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolStudentService {
  url = 'http://localhost:3000/school-student';
  constructor(private http: HttpClient) {}

  getSchoolStudents(): Observable<SchoolStudent[]> {
    return this.http.get<SchoolStudent[]>(this.url);
  }

  getSchoolStudentById(id: number): Observable<SchoolStudent> {
    return this.http.get<SchoolStudent>(`${this.url}/${id}`)
  }

  addSchoolStudent(schoolStudent: SchoolStudent): Observable<SchoolStudent> {
    return this.http.post<SchoolStudent>(this.url, schoolStudent, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
  }

  // getSchoolStudentBySchoolId(id: number): Observable<SchoolStudent> {
  //   return this.http.get<SchoolStudent>(`${this.url}/${id}`)
  // }

  // getSchoolStudentByStudentId(id: number): Observable<SchoolStudent> {
  //   const
  //   return this.http.get<SchoolStudent>(`${this.url}/${id}`)
  // }

  // constructor(private schoolService: SchoolService, private studentService: StudentService) { }
  // private schoolStudents: SchoolStudent[] = []
  // createEmptySchoolStudent() {
  //   return {
  //     id: Math.floor(Math.random() * 1000000000).toString(),
  //     school: {
  //       id: "",
  //       cnpj: "",
  //       name: "",
  //       type: ""
  //     },
  //     student: {
  //       id: "",
  //       cpf: "",
  //       name: "",
  //       address: "",
  //       dateOfBirth: new Date()
  //     },
  //     grades: {
  //       grades: []
  //     },
  //     fos: ""
  //   }
  // }

  // createSchoolStudent(schoolStudent: SchoolStudent) {
  //   this.schoolStudents.push(schoolStudent)
  // }

  // getSchoolStudents() {
  //   return this.schoolStudents
  // }

  // getStudentByCPF(cpf: string) {
  //   const index = this.schoolStudents.findIndex(x => x.student.cpf === cpf)
  //   return this.schoolStudents[index]
  // }

  // getTotalGrades(cpf: string) {
  //   let total = 0
  //   const student = this.getStudentByCPF(cpf)
  //   for (let grade in student.grades.grades) {
  //     let x: number = +grade
  //     total = total + x
  //   }
  //   return total
  // }

  // deleteSchoolStudentByStudent(student: Student) {
  //   this.schoolStudents = this.schoolStudents.filter((x) => x.student.id !== student.id)
  // }

  // deleteSchoolStudentBySchool(school: School) {
  //   this.schoolStudents = this.schoolStudents.filter((x) => x.school.id !== school.id)
  // }
}
