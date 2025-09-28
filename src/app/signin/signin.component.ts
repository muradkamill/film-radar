import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  email='';
  password=''
  constructor(private router: Router,private authService:AuthService) {}
  onSignup() {
    this.router.navigate(['/signup']);
  }
  async onSignin() {
    try {
      await this.authService.signIn(this.email, this.password);
      alert('Login successful! Welcome back!');
    } catch (error) {
      alert('Error!')
    }
  }
  
}
