import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  // authenticate(username, password) {
  authenticate(username:string, password:string):Observable<User> {
        console.log('into authservice~authenticate: username passed in:',username);
        //if (username === "username" && password === "password") {
        // if(username.toLowerCase()==='username'&&password.toLowerCase()==='password'){
        //   sessionStorage.setItem('username', username);
        //   return true;
        // } else {
        //   return false;
        // }
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        // return this.httpClient.get<User>('http://localhost:8080/employees/validateLogin',{headers});
            // .map(
            //     userData => {
            //         sessionStorage.setItem('username',username);
            //         return userData;
            //     }
            //   )
            // ;
            // getEmployee():Observable<Employee>{
              // dummy only - rest endpoint is set up to return a dummy User object
              // return this.httpClient.get<User>('http://localhost:8080/employees/validateLogin',{headers});
              console.log("@ authservice~authenticate before httpClient call");
              return this.httpClient.get<User>('http://localhost:8080/validateLogin',{headers});

              // real case should be a rest api call to getEmployee
            // }

        }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    console.log("into authservice~logout");
    sessionStorage.removeItem('username');
  }

}
