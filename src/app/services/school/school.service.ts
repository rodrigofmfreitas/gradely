import { Injectable } from '@angular/core';
import { School } from '../../interfaces/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private schools: School[] = []

  constructor() { }
}
