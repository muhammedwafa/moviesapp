import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = "";
  password = "";
  errorMessage = "";

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    if (this.userName.trim().length === 0) {
      this.errorMessage = "user name is required.";
    } else if (this.password.trim().length === 0) {
      this.errorMessage = "password is required."
    } else {
      this.errorMessage = "";
      let result = this.authService.login(this.userName, this.password);
      if (result === 200) {
        this.router.navigate(['home'])
      } else if (result === 403) {
        this.errorMessage = "invalid credentials";
      }
    }
  }
}
