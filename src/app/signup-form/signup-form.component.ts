import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent  {
 signupForm = new FormGroup({
   username: new FormControl('', [
     Validators.required,
     Validators.minLength(6)
     ]),
   password: new FormControl('', Validators.required)
 });

get username(){
  return this.signupForm.get('username');
}


}
