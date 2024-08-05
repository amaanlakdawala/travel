import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  constructor(private route:ActivatedRoute, private dataservice:DataService){
    
  }
  hotel!: Observable<any>;
  id:any;
  
 ngOnInit():void{
  this.id = this.route.snapshot.params['id'];
  console.log(this.id)
  if(this.id){
    this.hotel = this.dataservice.getHotel(this.id);
    console.log(this.hotel)
  }
 }
  
   }




