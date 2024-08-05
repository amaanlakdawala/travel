import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginform!:FormGroup
  constructor(private formbuilder:FormBuilder,private router:Router,private auth:AuthService,private dataservice:DataService){}
  ngOnInit(){
    this.loginform=this.formbuilder.group({
      username:[null,[Validators.required]],
      password:[null,[Validators.required]]

    })
  }


  handleClick(){

  //   this.dataservice.loginUser(this.loginform.value).subscribe(
  //     (response: any) => {
  //         localStorage.setItem('token', response.jwt); // Store token in local storage
  //         this.router.navigate(['/']);
  //         console.log("logged in");
  //         console.log(response);
  //     },
  //     (error: any) => {
  //         console.log(error);
  //         console.log("error occurred");
  //     }
  // );
  




    this.dataservice.loginUser(this.loginform.value).subscribe(
      (response:any)=>{
        localStorage.setItem('token', response.jwt);
        this.router.navigate(['/'])
        console.log("logged in")
        console.log(response)

      },
      (error:any)=>{
        console.log(error)
        console.log("error occurred")
      }
    )
  }

  // handleClick(){
  //   this.dataservice.getUsers().subscribe(
  //     (data:any)=>{
  //       for (let user of data){
  //         if(user.username === this.loginform.value.username && user.password === this.loginform.value.password){
  //           this.router.navigate(['/'])
  //         }
  //       }
  //     }
  //   )
  // }
    
    // this.auth.login(this.loginform.value.username,this.loginform.value.password)
    // this.router.navigate(['/'])
    // console.log("Navigated")
    
  
  

}
