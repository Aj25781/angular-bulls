import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GymService {

  constructor(private http:Http) { }

//add the user details
AddDetails(newUser)
{
var headers=new Headers();
headers.append('Content-type','application/json');
return this.http.post('http://localhost:3000/api/signup',newUser,{headers : headers})
.pipe(map(res=>res.json()));
}


}
