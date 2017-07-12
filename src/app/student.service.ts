import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Student } from './student';
import { StudentEditForm } from './student-edit/student-edit-form';

@Injectable()
export class StudentService {

    student: Student;

    editStudent: StudentEditForm;

    posts_Url: string = 'http://localhost:8080/student/createstudent';

    getStudent_Url: string = 'http://localhost:8080/student/getstudent';

    updateStudentUrl: string = 'http://localhost:8080/student/updatestudent';


    constructor(private http: Http) {

    }

    getStudents() {

        const header = new Headers({ 'Content-Type': 'application/json' });
        // return this.http.get('http://localhost:8080/student/getstudents', {headers : header}).map(res => res.json());
        /*  return this.http.get('http://localhost:8080/student/getstudents', {headers : header}).map(res => 
          {return students.map((student) => new Student(student));
              });*/
        return this.http.get('http://localhost:8080/student/getstudents',
            { headers: header }).map(res => res.json())
            .map(students => students.map((student) => new Student(student)));


        // return this.http.get('http://localhost:8080/student/getstudents', {headers : header}).map(res => <Student[]>res.json());

    }

    getStudentForId(stdtid) {
        const header = new Headers({ 'Content-Type': 'application/json' });
        /* return this.http.get('http://localhost:8080/student/getstudent/12', 
         { headers: header }).map(res => res.json())
         .map(student => student.map((student) => new Student(student))
         .catch((error:any) => Observable.throw(error.json().error || 'Server error')));
 */

 let getStudentUrl = 'http://localhost:8080/student/getstudent/'+stdtid;
        return this.http.get(getStudentUrl,
            { headers: header }).map(response => {
                //console.log(response);
                return response.json();
            });
    }

    addStudent(student: Student) {
        return this.http.post(this.posts_Url, student, {
        })
            .map(res => res.json());

    }

    updateStudent(editStudent: StudentEditForm) {
        const header = new Headers({ 'Content-Type': 'application/json' });
        console.log(editStudent);
        return this.http.put(this.updateStudentUrl, editStudent, { headers: header
        });

    }

    getStudent(): Observable<Student> {

        const header = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get('http://localhost:8080/student/getstudent/12', { headers: header })
            .map((res: Response) => res.json()).map((student) => new Student(student))
            //.map(students => students.map((student) => new Student(student)))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
}