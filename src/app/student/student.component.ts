import { Router } from '@angular/router';
import { Component, Input, Output, OnInit } from '@angular/core';
import { StudentForm } from './student-form';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  stdnt = new StudentForm("1", "mitchel", "sam", "msam@student.com");
  
  responseStatus: Object = [];
  status: boolean;
  submitted = false;

  get diagnostic() { return JSON.stringify(this.stdnt); }

  onSubmit() { this.submitted = true; }

  onClick() { console.log(JSON.stringify(this.stdnt)); }

  constructor(private _studentService: StudentService, private router: Router) {
    

  }

  submitStudent() {
    console.log(JSON.stringify(this.stdnt));
    this._studentService.addStudent(this.stdnt).subscribe(
      data => console.log(this.responseStatus = data),
      err => console.log(err),
      () => console.log('Request Completed')
    );
    this.router.navigate(['/students']);
  }

  ngOnInit() {
  }

}
