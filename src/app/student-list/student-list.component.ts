import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

students;

constructor(private studentService: StudentService){
    this.students = this.studentService.getStudents();

}

getStudents(){
  this.studentService.getStudents().subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  );
}

  ngOnInit() {
  }

}
