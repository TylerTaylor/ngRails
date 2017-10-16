import { AuthDialogComponent } from './../auth-dialog/auth-dialog.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // ViewChild decorator references the AuthDialogComponent
  // from our template so we can access its methods
  // and attributes directly from our NavbarComponent class
  @ViewChild('authDialog') authDialog: AuthDialogComponent;

  constructor() { }

  ngOnInit() {
  }

  // Accepts an optional mode param (default is 'login')
  // then we call the openDialog function provided by the AuthDialogComponent
  presentAuthDialog(mode?: 'login' | 'register'){
    this.authDialog.openDialog(mode);
  }

}
