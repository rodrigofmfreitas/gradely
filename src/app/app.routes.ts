import { SelectStudentComponent } from './registrations/selectable/select-student/select-student.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GradesTableComponent } from './sidebar/grades-table/grades-table.component';
import { RegistrationsComponent } from './sidebar/registrations/registrations.component';
import { DashboardComponent } from './sidebar/dashboard/dashboard.component';
import { AddStudentComponent } from './forms/student/add-student/add-student.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AddSchoolComponent } from './forms/school/add-school/add-school.component';
import { AddSchoolStudentComponent } from './forms/schoolStudent/add-school-student/add-school-student.component';
import { SelectSchoolComponent } from './registrations/selectable/select-school/select-school.component';
import { EditStudentComponent } from './forms/student/edit-student/edit-student.component';
import { EditSchoolComponent } from './forms/school/edit-school/edit-school.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContaComponent } from './conta/conta.component';

export const routes: Routes = [

  { path: 'usr', component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      // {
      //   path: 'dashboard', component: DashboardComponent,
      //   children: [
      //     { path: '1', component: StudentFormComponent },
      //     { path: '2', component: SchoolFormComponent },
      //   ],
      // },
    { path: 'grades', component: GradesTableComponent },
    { path: 'registrations', component: RegistrationsComponent },
    { path: 'student/add', component: AddStudentComponent },
    { path: 'school/add', component: AddSchoolComponent },
    { path: 'courses/add', component: AddSchoolStudentComponent },
    { path: 'select/student', component: SelectStudentComponent  },
    { path: 'select/student/:id', component: EditStudentComponent },
    { path: 'select/school', component: SelectSchoolComponent },
    { path: 'select/school/:id', component: EditSchoolComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: ContaComponent },
  { path: '', component: LandingPageComponent }
];
