import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  // bound to form
  username:string;
  password:string;
  // status:boolean;
  message:string;
  user:User;
  // ivalidLogin:boolean=false;
  // validUser:boolean=false;
  userstatus:string="";

  // onSubmit(){
  //   console.log('username',this.username);
  //   console.log('password',this.password);
  // }

  checkLogin() {
    console.log('into checkLogin() method');
    console.log('username',this.username);
    console.log('password',this.password);
    this.authservice.authenticate(this.username,this.password).subscribe(
      (data:User)=>{
        // this.validUser=data.validity;
        //this.userstatus=data.status;
        if(data.status.toLowerCase()==='active'){
          console.log('after authservice~authenticate back to loginPage~checkLogin - value of data.username/data.status is active= :'+data.username+'/'+data.status);
          this.router.navigate(['home']);

        }else{
            console.log('login failed!');
            this.message="you have entered a wrong username or password";
        }
      },
      err=>{
        console.error(err);
      }
    );
    // console.log("loginPage~checkLogin-resultant assigned value of this.userstatus=",this.userstatus);
    // // if (this.authservice.authenticate(this.username, this.password)) {
    // // if(this.validUser){
    // if(this.userstatus.toLowerCase()==='active'){
    //   // this.invalidLogin=false;
    //   console.log('login succeeded! into if checkLogin case authservice~authenticate true. value of this.userstatus',this.userstatus);
    //   this.router.navigate(['home']);
    // } else{
    //   // this.invalidLogin=true;
    //   console.log('login failed!');
    //   this.message="you have entered a wrong username or password";
    // }
  }

  constructor(
    private router:Router,
    private authservice:AuthenticationService,
  ) { }

  ngOnInit() {
  }

}
