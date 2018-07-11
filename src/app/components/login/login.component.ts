import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string;
password:string;
user:Object;
  constructor(private authservice :AuthService,
    private validateservice :ValidateService,
  private flashmessages :FlashMessagesService,
private router :Router
) { }

  ngOnInit() {
  }
  LoginSubmit() 
  {
const user={
  email:this.email,
password:this.password
}
this.authservice.authenticateuser(user).subscribe(data=>{
if(data.success)
{
this.authservice.storeUserData(data.token,data.user);
this.flashmessages.show('Now you are loggedIn',{cssClass:'alert-success',timeout:3000});
this.authservice.getProfile().subscribe(profile=>{
  this.user=profile.user;
},
err=>{
  console.log(err);
  return false;
});

if(user.email==='admin123@gmail.com' && user.password==='admin123')
{
  console.log('admin');
  this.router.navigate(['/admin']);  
}
else
{
  console.log('user');
  this.router.navigate(['/dashboard']);
}

}
else
{
this.flashmessages.show(data.msg,{cssClass:'alert-danger',timeout:3000});
this.router.navigate(['/login']);
}
});
}
}

