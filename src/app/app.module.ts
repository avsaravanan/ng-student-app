import { InnovateAddComponent } from './Innovate/innovate-add.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StudentService } from './student.service'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
//import { Student } from './student';

const appRoutes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full'},
  { path: 'addstudent', component: StudentComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'innovate', component: InnovateAddComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'editstudent/:id', component: StudentEditComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentListComponent,
    StudentEditComponent,
    InnovateAddComponent,
    SignupFormComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
