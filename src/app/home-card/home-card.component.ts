// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
// import { Router, NavigationEnd } from '@angular/router';
// import { ChangeDetectorRef } from '@angular/core';

// @Component({
//   selector: 'app-home-card',
//   templateUrl: './home-card.component.html',
//   styleUrls: ['./home-card.component.css']
// })
// export class HomeCardComponent implements OnInit {
//   hotels: any[] = [];

//   constructor(
//     private dataService: DataService,
//     private router: Router,
//     private cdr: ChangeDetectorRef
//   ) {}

//   ngOnInit(): void {
//     this.fetchHotels();

//     // Listen to router events
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         this.fetchHotels();
//       }
//     });
//   }

//   fetchHotels(): void {
//     this.dataService.getHotels().subscribe(
//       (data: any[]) => {
//         this.hotels = data;
//         console.log(this.hotels);
//         if (this.hotels.length > 0) {
//           console.log(this.hotels[0].name);
//         }
//         this.cdr.detectChanges(); // Manually trigger change detection
//       },
//       error => {
//         console.error('Error fetching hotels:', error);
//       }
//     );
//   }
// }





import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css'
})
export class HomeCardComponent implements OnInit {

  constructor(private dataservice: DataService, private router: Router){}
  newArrays: number[] = [1, 2, 3];
  id!:number;
  hotels:any;
  
  
  ngOnInit(): void {
    
      this.fetchHotels();    
  }
  
  fetchHotels(): void {
    this.dataservice.getHotels().subscribe(data=>{
      this.hotels=data;
      
    }) 
}


}


