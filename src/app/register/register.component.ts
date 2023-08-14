import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = '';
  password: string = '';
  confPassword: string = '';
  verified: boolean = false;
  confirmPassword: string = '';
  passwordsMatch: boolean = true;

  constructor(private fb: FormBuilder, private router: Router, private dataService: DataService) { }

  validatePassword() {
    this.passwordsMatch = this.password === this.confPassword;
    console.log("pass:",this.password);
    console.log("confpass:",this.confPassword);
  }

  register(){

    let userInfo = {
      username: this.username,
      password: this.password,
      userID: Math.floor(Math.random()*1000) 
    }
    if (this.passwordsMatch) {
      this.dataService.addUser(userInfo).subscribe(response=> {
        console.log("User Added",response);
        alert("User Successfully Added !!")
        this.router.navigate(['/login']);
      })
    } else {
      console.log("Passwords do not match.");
    }
  }
}
