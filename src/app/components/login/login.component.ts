import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private userModel = { 'email': null, 'password': null };

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    if (this.userModel.password !== null && this.userModel.email !== null) {
      this.authService.login(JSON.stringify(this.userModel)).then(() => {
        this.router.navigateByUrl('/');
      });
    }
  }

}
