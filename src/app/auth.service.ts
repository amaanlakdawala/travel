import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated:boolean=false;

  login(username:any,password:any){
    if (username=="admin" && password=="admin"){
      this.isAuthenticated=true
    }
  }

  isLoggedIn(){
    return this.isAuthenticated
  }
}
