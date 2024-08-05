import { CanActivateFn, Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private auth:AuthService,private router:Router){}
  canActivate(){
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
