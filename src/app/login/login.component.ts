import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private router: Router
    ,private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }


  handleLogin(){
    console.log(this.username);
    // if(this.username==='in28minutes' && this.password === 'dummy'){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
       this.invalidLogin = false;
       this.router.navigate(['welcome', this.username])
    } else {
      this.invalidLogin = true;
      this.errorMessage = 'Invalid Credentials'
    }
  }

}