import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private router:Router,private auth:AuthService,private dataservice:DataService){}
  message=""
  ngOnInit(){
    // this.dataservice.user().subscribe({
    //   next: (res:any) => {
    //     this.message=res.name;
    //     console.log(this.message)
    //   },
    //   error:err=>{
    //     console.log(err)
    //   }

    // })
  }

}
