import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'logincomp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username: string = '';
  password: string = '';

  constructor(private fb: FormBuilder, private router:Router, private server: DataService) { } 

  ngOnInit(): void {
    }

    loginPage = this.fb.group({
      username:['',[Validators.required, Validators.minLength(6)]],
      password:['',[Validators.required, Validators.minLength(6)]]
    })

   usernameError = this.loginPage.get('username')?.invalid
   passwordError = this.loginPage.get('password')?.invalid

    // get username(){ 
    //   return this.loginPage.get('username');
    // }

    login(){
      let body = {
        username: this.loginPage.get('username'),
        password: this.loginPage.get('password')
      }
  
      let verified;
  
      this.server.login().subscribe((data)=>{
        for(let i=0; i<data.length; i++){
          if(body.username === data[i].username && body.password === data[i].password){
            verified = true;
          }
        }
        verified = false;
      });

      if(verified){
        this.router.navigate(['/home']);
      }
      else{
        alert("User does not exist or password does not match!")
      }
      
    }
  
}
