import { Angular2TokenService } from 'angular2-token';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  signInUser = {
    email: '',
    password: ''
  };

  // The login form will have an output called onFormResult
  // which is an event that gets fired when the login request is complete.
  // The parent components can then listen and act on it.
  @Output() onFormResult = new EventEmitter<any>();

  constructor(private tokenAuthService:Angular2TokenService) { }

  ngOnInit() {
  }

  onSignInSubmit(){

    this.tokenAuthService.signIn(this.signInUser).subscribe(

      res => {
        if (res.status == 200){
          this.onFormResult.emit({signedIn: true, res});
        }
      },

      err => {
        console.log('err: ', err);
        this.onFormResult.emit({signedIn: false, err});
      }

    )

  }

}
