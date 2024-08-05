import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationform!:FormGroup
  constructor(private formbuilder:FormBuilder, private router:Router,private dataservice:DataService){}
  status:any = true 
  
  // handleClick(){
  //   this.router.navigate(['/login'])
  //   console.log(this.registrationform.value)
   
  // }

  ngOnInit(){
    this.registrationform=this.formbuilder.group({
      username:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.maxLength(10)]],
      confirm_password:[null,[Validators.required,Validators.maxLength(10)]]
    })    
  }

  handleClick(){
    if(this.registrationform.valid){
      console.log(this.registrationform.value)
    }
    
    this.dataservice.createUser(this.registrationform.value).subscribe(
      (response:any)=>{
        console.log(response)
        console.log("User created")
      }
    )
    this.router.navigate(['/login'])
  }
  

}
