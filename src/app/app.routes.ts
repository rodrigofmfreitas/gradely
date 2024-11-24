import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GradesTableComponent } from './sidebar/grades-table/grades-table.component';
import { RegistrationsComponent } from './sidebar/registrations/registrations.component';
import { DashboardComponent } from './sidebar/dashboard/dashboard.component';
import { StudentFormComponent } from './forms/student.form/student.form.component';
import { SchoolFormComponent } from './forms/school.form/school.form.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [

  { path: '', component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '1', component: StudentFormComponent },
      { path: '2', component: SchoolFormComponent },
    ],
    },
    { path: 'grades', component: GradesTableComponent },
    { path: 'registrations', component: RegistrationsComponent },
    { path: 'studentForm', component: StudentFormComponent },
    { path: 'schoolForm', component: SchoolFormComponent },
  ]
  },
  { path: 'login', component: LoginComponent}
];
