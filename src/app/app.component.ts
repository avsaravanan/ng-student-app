import { Component } from '@angular/core';
import {StudentService} from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student App';
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

  ngOnInit(){
    
  }

}
