export class Student{
   public id: string;
   public first_name: string;
   public last_name: string;
   public email: string;

  // constructor(id, first_name, last_name, email){}

    constructor(student: Student){
        if(student){
            this.id = student.id;
            this.first_name = student.first_name;
            this.last_name = student.last_name;
            this.email = student.email;

        }

    }


    
}