import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { NgForm, FormGroup } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  admin = {};
  loginForm: FormGroup;

  constructor(private router: Router) { }

  login(f: NgForm): void {
    const formData = f.value;
    const username = formData.username;
    const password = formData.password;

    if(username !== null && password !== null) {
      localStorage.setItem("admin", "admin");
      this.router.navigate(['/dashboard']);
    }
  }

  reset(f: NgForm): void {
    f.reset();
  }
}