import { Angular2TokenService } from 'angular2-token';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class AuthService {

  // userSignedIn$ is a RxJs Subject, which means its an
  // Observer and an Observable at the same time.
  // This means we can control its value in our service,
  // and observe its changes outside of it. $ = stream of data which can change over time
  userSignedIn$:Subject<boolean> = new Subject();

  constructor(public authService:Angular2TokenService) {
    // Angular2TokenService gives us a method called validateToken() which validates
    // the current token against the Rails backend
    this.authService.validateToken().subscribe(
      res => res.status == 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
    )
  }

  logOutUser():Observable<Response>{
    return this.authService.signOut().map(
      res => {
        // notify our observer that the user has signed out
        this.userSignedIn$.next(false);
        return res;
      }
    )
  }

  registerUser(signUpData: {email:string, password:string, passwordConfirmation:string}):Observable<Response>{
    return this.authService.registerAccount(signUpData).map(
      res => {
        // notify our observer that the user has signed in
        this.userSignedIn$.next(true);
        return res;
      }
    )
  }

  logInUser(signInData: {email:string, password:string}):Observable<Response>{
    return this.authService.signIn(signInData).map(
      res => {
        this.userSignedIn$.next(true);
        return res;
      }
    )
  }
}
