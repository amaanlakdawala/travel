import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent  {
  
  name:string='';
  city:string='';
  price_per_night: number | null = 0;
  filteredHotels:any[]=[]

  constructor(private dataService : DataService){}

  

 

  filterHotels() {
    console.log(this.city);
    console.log(this.price_per_night);
    console.log(this.name);
    this.dataService.filterHotel(this.name, this.city, this.price_per_night)
      .subscribe(data => {
        this.filteredHotels = data;
        console.log(this.filteredHotels);
        
      });
    
  }
  
}
