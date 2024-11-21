import { Grades } from './grades';
import { School } from "./school";
import { Student } from "./student";

export interface SchoolStudent{
  school: School;
  student: Student;
  grades: Grades;
  fos: string; //field of study
}
