import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  error: string | null = null;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      console.log('start login');
      await this.authService.login(this.username, this.password).toPromise();
      console.log('end login');

      this.router.navigate(['/game']);

    } catch (e) {
      this.error = 'Sikertelen belépés.';
    }
  }
}
