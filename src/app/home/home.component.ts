import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private dataservice: DataService, private router:Router,private http:HttpClient){}
  message:any;
  api='http://127.0.0.1:8000/api'
  
  
  // ngOnInit(): void {
    

  //   const headers = new HttpHeaders({
  //   'Authorization': `Bearer ${this.token}`
  // });
  //   this.http.get(`${this.api}/user/`, {headers,withCredentials: true }).subscribe(
  //     (data: any) => {
  //       this.message = data.username; // Adjust this if your API response has a different structure
  //       console.log(this.message);
  //     },
  //     (error: any) => {
  //       console.error('Error fetching user data', error);
  //     }
  //   );
  // }

  // hotels:any;
  // ngOnInit(): void {
  //   this.dataservice.getHotels().subscribe(data=>{
  //     this.hotels=data;
  //     console.log(this.hotels)
  //   })

  ngOnInit():void{

    const token = localStorage.getItem('token');

const headers = new HttpHeaders({
  'Authorization': `Bearer ${token}`
});

this.http.get(`${this.api}/user/`, { headers, withCredentials: true }).pipe(
  catchError(error => {
    console.error('Error fetching user data', error);
    return of(null); // or return an observable of a default value if you prefer
  })
).subscribe(res => {
  console.log(res);
});

    // this.http.get(`${this.api}/user/`, { withCredentials: true }).pipe(
    //   catchError(error => {
    //     console.error('Error fetching user data', error);
    //     return of(null); // or return an observable of a default value if you prefer
    //   })
    // ).subscribe(res => {
    //   console.log(res);
    // });
    
    // this.dataservice.user().subscribe({
    //   next: (res: any) => {
    //     this.message = res.name; // Assuming your API returns the user's name
    //     console.log(this.message);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     if (err.status === 401) {
    //       // Handle unauthorized access, e.g., redirect to login
    //       this.router.navigate(['/login']);
    //     }
    //   }
    // });
    // this.http.get(`${this.api}/user/`, { withCredentials: true}).subscribe(
    //   res=> {
      
    //     console.log(res)

    //   },
    //   (error: any) => {
    //     console.error('Error fetching user data', error);
    //   }
    // );

  }
}
