import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../scss/form.scss']
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
      const data = await this.authService.login(this.username, this.password).toPromise();

      this.router.navigate(['/game']);

    } catch (e) {
      this.error = 'Sikertelen belépés.';
    }
  }
}
