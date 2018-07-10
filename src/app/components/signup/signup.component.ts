import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Signup } from '../../signup';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';




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


  constructor(private authservice: AuthService, private fb: FormBuilder, private validateservice: ValidateService, private flashmessages: FlashMessagesService,private router:Router) { }

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
    if (!this.validateservice.validateRegister(newUser)) {
      this.flashmessages.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    if(!this.validateservice.validateEmail(newUser.email))
    {
      this.flashmessages.show('Please fill the valid email ',{cssClass:'alert-danger',timeout:3000});
      return false;
    }
    if(this.myForm.controls.password.value!=this.myForm.controls.Cnfpassword.value)
     {
      console.log('!Invalid password');
      return false;
      
     }
        
    this.authservice.registerUser(newUser)
      .subscribe(data => {
     if(data.success)
     {
       this.flashmessages.show('You are now registered and can login',{cssClss:'alert-success',timeout:3000});
       this.router.navigate(['/login']);
     }
     else
     {
       this.flashmessages.show('Something went wrong',{cssClass:'alert-danger',timeout:3000});
       this.router.navigate(['/signup']);
     }
      });
  }

}
