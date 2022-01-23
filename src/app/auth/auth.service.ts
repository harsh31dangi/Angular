import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

export interface AuthResponse{
  idToken : string;
  email : string;
  refreshToken : string;
  expiresIn : string;
  localId : string;
  registered ?: boolean;         //? indicates it is optional, for signup it will not be included, but for login it is required
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject(null);
  tokenExpirationTimer : any = null;
  constructor(private http : HttpClient, private router : Router) { }

  signUp(email : string, password : string){
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseApiKey,
    {
      email : email,
      password : password,
      returnSecureToken : true
    }
    ).pipe(catchError(this.handleError), tap(resData => {
      const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
      const user = new User(resData.email, resData.localId, resData.idToken,expirationDate);
      this.user.next(user);
      this.autoLogout(+resData.expiresIn * 1000)
      localStorage.setItem('userData',JSON.stringify(user));    //to store the user object 
                                                              //in persistent storage of browser so that it remains 
                                                          //there even if we refresh the page or restart the server
    }))
  }

  logout(){
    this.user.next(null);
    this.router.navigate(['auth']);
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(exiprationDuration : number){
    this.tokenExpirationTimer =  setTimeout(() => {
      this.logout();
    },exiprationDuration)
  }

  login(email : string, password : string){
    return this.http.post<AuthResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseApiKey,
      {
        email : email,
        password : password,
        returnSecureToken : true
      }
      ).pipe(catchError(this.handleError), tap(resData => {
        const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
        const user = new User(resData.email, resData.localId, resData.idToken,expirationDate);
        this.user.next(user);
        this.autoLogout(+resData.expiresIn * 1000)
        localStorage.setItem('userData',JSON.stringify(user));
      }))
  }

  autoLogin(){
    const userData : {
      email : string,
      id : string,
      _token : string,
      _tokenExpirationDate : string
    } = JSON.parse(localStorage.getItem('userData'));
    if(!userData){
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id, 
      userData._token, 
      new Date(userData._tokenExpirationDate)
    );
    if(loadedUser.token){          //if the token is valid the user will be logged in
      this.user.next(loadedUser);
      const exiprationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(exiprationDuration);
    }
  }

  private handleError(errorRes : HttpErrorResponse){
    let errorMessage = 'Some unknown error occurred!!'
      if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage)
      }
      switch(errorRes.error.error.message){
        case 'EMAIL_EXISTS':
          errorMessage = "This email exists already!!"
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = "This email does not exists!!"
          break;
        case 'INVALID_PASSWORD':
          errorMessage = "This password does not match!!"
          break;
        default:
          errorMessage = "This is default error!!"
          break;
      }
      return throwError(errorMessage);
  }

}
