import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginform!:FormGroup
  constructor(private formbuilder:FormBuilder,private router:Router,private auth:AuthService){}
  ngOnInit(){
    this.loginform=this.formbuilder.group({
      username:[null,[Validators.required]],
      password:[null,[Validators.required]]

    })
  }
  handleClick(){
    this.auth.login(this.loginform.value.username,this.loginform.value.password)

    this.router.navigate(['/'])
    console.log("Navigated")
    
  }
  

}
