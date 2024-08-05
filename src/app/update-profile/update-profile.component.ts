import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent {
  updateForm!:FormGroup
  constructor(private formbuilder:FormBuilder, private dataservice:DataService){}
  ngOnInit():void{
    this.updateForm = this.formbuilder.group({
      username:[null],
      bio:[null,[Validators.required,Validators.maxLength(100)]],
      location:[null],
      profile_image:[null],
      cover_image:[null]

    })
   
  }
  onSubmit(){
    console.log(this.updateForm.value)
    this.dataservice.updateprofile(this.updateForm.value).subscribe(
      (response:any)=>{
        console.log("user created");
      }
    )
  }

}
