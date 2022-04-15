import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {
  }

  login(userName: string, password: string) {
    if (userName == "basiony" && password == "123") {
      return 200;
    } else {
      return 403;
    }
  }


  logout() {
    this.router.navigate(['login']);
  }
}
