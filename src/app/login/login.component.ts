import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:any
  constructor(private loginService:LoginService, private router:Router){
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })   
  }

  onSubmit(){
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if(!this.loginForm.valid){
      return;
    }

    this.loginService.login(username, password).subscribe({
      next: (user) => {
        console.log(user)
      },
      error: (error) => {
        console.log(error)
      },
    });

    this.router.navigate(['/login'])
  }
}
