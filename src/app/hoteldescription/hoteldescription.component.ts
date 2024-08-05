import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hoteldescription',
  templateUrl: './hoteldescription.component.html',
  styleUrl: './hoteldescription.component.css'
})
export class HoteldescriptionComponent implements OnInit {
  constructor(private route:ActivatedRoute, private dataservice:DataService){
    
  }
 
  
  hotel:any;
  id:any;
  
  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id) {
      this.dataservice.getHotel(this.id).subscribe(
        (data) => {
          this.hotel = data;
          console.log(this.hotel);
        },
        (error) => {
          console.error('Error fetching hotel data:', error);
        }
      );
    }
  }


  // bookRoom(){
  //   console.log("Hotel Booked")
  // }
}  
  
 


