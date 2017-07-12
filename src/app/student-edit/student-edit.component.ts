import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentEditForm } from './student-edit-form';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Student } from '../student';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

student: Student;
stdnt = new StudentEditForm('1','aaa','bbb','ccdc@test.com');

stdtid;

  responseStatus: Object = [];
  status: boolean;

  constructor(private studentService: StudentService, private router: Router,

    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.stdtid = params['id'];
     
    });

    this.studentService.getStudentForId(this.stdtid).subscribe(
      
      response => {
        console.log(response);
        this.student = response;
        
        this.stdnt.id = this.student.id;
        this.stdnt.first_name = this.student.first_name;
        this.stdnt.last_name = this.student.last_name
        this.stdnt.email = this.student.email;
        if (response.status == 404) {
          alert('Not found');

        }
      }
    );
  }

  updateStudent() {
    console.log(JSON.stringify(this.stdnt));
    this.studentService.updateStudent(this.stdnt).subscribe(
      
      data => console.log(this.responseStatus = data),
      err => console.log(err),
      () => console.log('Update Completed')
    );
    this.router.navigate(['/students']);
  }


}
