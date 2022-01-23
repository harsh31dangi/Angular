import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: []
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error : string = null;

  authObs : Observable<AuthResponse>;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm : NgForm){
    this.error = null;
    if(!authForm.valid)
      return;

    const email = authForm.value.email;
    const password = authForm.value.password;
    this.isLoading = true;  //to activate the loading spinner

    if(!this.isLoginMode){
      this.authObs = this.authService.signUp(email,password);
    }
    else{
      this.authObs = this.authService.login(email,password);
    }

    //one of the two modes will be activated at one time, and as we need to do same code for subscribing
    //in either mode, so we saved the subscription in an observable
    //and then subscribe to that 

    this.authObs.subscribe( response => {
      this.isLoading = false;
      // on successful signup or login we will redirect the user to another page
      this.router.navigate(['/recipes']);
    }, errorRes => {
      this.error = errorRes;
      console.log(this.error)
      this.isLoading = false;
    })

    authForm.reset();
  }

  onModalClose(){
    this.error = null;
  }
}
