import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GradesTableComponent } from './sidebar/grades-table/grades-table.component';
import { RegistrationsComponent } from './sidebar/registrations/registrations.component';
import { DashboardComponent } from './sidebar/dashboard/dashboard.component';
import { StudentFormComponent } from './forms/student.form/student.form.component';
import { SchoolFormComponent } from './forms/school.form/school.form.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent,
    // children: [
    //   {path: 'adsf', component: }
    // ]
  },
  {path: 'grades', component: GradesTableComponent},
  {path: 'registrations', component: RegistrationsComponent},
  {path: 'studentForm', component: StudentFormComponent},
  {path: 'schoolForm', component: SchoolFormComponent},
  {path: '', component: HomeComponent}
];
