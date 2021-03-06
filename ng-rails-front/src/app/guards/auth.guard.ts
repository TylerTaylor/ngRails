import { Angular2TokenService } from 'angular2-token';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authTokenService:Angular2TokenService,
                private router:Router){}

    canActivate(){
        if (this.authTokenService.userSignedIn()) {
            return true;
        } else {
            this.router.navigate(['/'])
            return false;
        }
    }

}

