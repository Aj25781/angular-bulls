import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 // email:string='admin@proj2ect.com';

 /*
 //*ngIf="email !='admin@project.com'"
<div *ngIf="email == 'admin@project.com'">
  UserContent
</div>*/
  constructor(){}
    
  ngOnInit() {

}
}
