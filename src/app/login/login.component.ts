import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'logincomp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  verified: boolean = true;

  constructor(private fb: FormBuilder, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }
  login() {
    // if (this.dataService.login(this.username, this.password)) {
    //   this.router.navigate(['home']);
    //   // for (let i = 0; i < data.length; i++) {
    //   //   if (this.username === data[i].username && this.password === data[i].password) {
    //   //     this.verified = true;
    //   //   }
    //   // }
    //   // this.verified = false;
    // };

    this.dataService.login(this.username, this.password)
      .subscribe(users => {
        if (users.length > 0) {
          // Redirect to home page after successful login
          this.router.navigate(['/home']);
        } else {
          // Display an error message
          alert("User does not exist or password does not match!")
          console.log('Login failed. Please check your credentials.');
        }
      });
  }

  goToReg() {
    this.router.navigate(['register']);
  }
}
