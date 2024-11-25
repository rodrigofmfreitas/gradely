import { Injectable } from '@angular/core';
import { School } from '../../interfaces/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private schools: School[] = [
    {
      id: Math.floor(Math.random() * 1000000).toString(),
      cnpj: "1",
      name: "FUMEC",
      type: "Superior"
    },
    {
      id: Math.floor(Math.random() * 1000000).toString(),
      cnpj: "2",
      name: "PUC",
      type: "Superior"
    }
  ]

  constructor() { }

  createSchool() {
    return {
      id: Math.floor(Math.random() * 1000000).toString(),
      cnpj: "",
      name: "",
      type: ""
    }
  }

  addSchool(school: School) {
    this.schools.push(school)
  }

  getSchools() {
    return this.schools
  }
}
