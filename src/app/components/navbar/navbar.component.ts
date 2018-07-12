import { Component, OnInit } from '@angular/core';

import {Router , NavigationEnd} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'app';
  constructor(private router: Router,
    private authservice :AuthService,
    private validatservice :ValidateService,
private flashmessageservice :FlashMessagesService) { }
isLoggedIn:boolean;
user:any;
a:boolean;
b:boolean;
  ngOnInit() {
    this.isLoggedIn=this.authservice.loggedIn();

    
    this.authservice.getProfile().subscribe(profile=>{
        this.user=profile.user;
    
        if(this.user.email==='admin123@gmail.com')
        {
            console.log('admin_dashboard')
          this.a=true;
        }
        else
        {
            console.log('user_dashboard')
            this.b=true;
        }  
    
    },
      err=>{
        console.log(err);
        return false;
      });
      



    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}

logoutSubmit()
{
    this.authservice.LogOut();
    this.flashmessageservice.show('You are logged out',{
        cssClass:'alert-success',timeout:3000
    });
    this.router.navigate(['/login']);
    return false;   
}
  }


