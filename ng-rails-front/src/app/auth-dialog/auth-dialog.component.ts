import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {

  // This allows us to pick the right form to show
  @Input('auth-mode') authMode: 'login' | 'register' = 'login';

  // an "event emitter" as required by the Materialize Dialog Directive.
  // We will emit events on it to open or close our auth dialog 
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor() { }

  // This sets the current auth mode and displays the proper dialog
  openDialog(mode: 'login' | 'register' = 'login'){
    this.authMode = mode;
    this.modalActions.emit({action: 'modal', params:['open']});
  }

  ngOnInit() {
  }

  // These help us conditionally display the proper form
  isLoginMode(){return this.authMode == 'login'}
  isRegisterMode(){return this.authMode == 'register'}

}
