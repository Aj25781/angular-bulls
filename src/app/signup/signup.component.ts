import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Signup } from '../signup';
import { GymService } from '../gym.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup: Signup[] = [];
  user: Signup;
  name: string;
  email: string;
  contact_no: Number;
  age: Number;
  gender: string;
  password: string;
  Cnfpassword: string;
  myForm: FormGroup;


  constructor(private gymservice: GymService, private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      contact_no: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      Cnfpassword: ['', Validators.required],
    });
  }

  //Add the user details
  AddUserDetails() {
    const newUser = {
      name: this.myForm.value.name,
      email: this.myForm.value.email,
      contact_no: this.myForm.value.contact_no,
      age: this.myForm.value.age,
      gender: this.myForm.value.gender,
      password: this.myForm.value.password
    }
    this.gymservice.AddDetails(newUser)
      .subscribe(user => {
        this.signup.push(user.data);
        this.myForm.reset();
      });
  }

}
