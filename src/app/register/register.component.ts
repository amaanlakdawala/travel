import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationform!:FormGroup
  constructor(private formbuilder:FormBuilder, private router:Router){}
  
  handleClick(){
    this.router.navigate(['/login'])
    console.log(this.registrationform.value)
  }

  ngOnInit(){
    this.registrationform=this.formbuilder.group({
      username:[null,[Validators.required]],
      password:[null,[Validators.required,Validators.maxLength(10)]],
      confirm_password:[null,[Validators.required,Validators.maxLength(10)]]
    })
  }

}
