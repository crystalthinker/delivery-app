import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {LoginService} from '../../core/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public loginFormGroup: FormGroup;
 public validLogin: boolean = true;

 constructor(private fb: FormBuilder, private service: LoginService, private router: Router) {
    this.createLoginForm();
 }

  ngOnInit() {
  }

  public createLoginForm() {
      this.loginFormGroup = this.fb.group({
          username: new FormControl('', Validators.required),
          password: new FormControl('', Validators.required)
      });
  }

  public loginForm() {
      this.service.login(this.loginFormGroup.value.username, this.loginFormGroup.value.password)
        .subscribe(data => {
            if(data) {
               this.service.emitCheckLoggedIn(data.role);
               if(data.role === 'delivery_boy') {
                   this.router.navigate(['/deliveryboy-dashboard']);
               } else if(data.role === 'admin') {
                   this.router.navigate(['/dashboard']);
               }
            } else {
                this.validLogin = false;
            }
        });
  }

}
