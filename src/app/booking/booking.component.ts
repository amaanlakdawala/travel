import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  
  bookingForm!:FormGroup
  id:any;
  hotels:any;
  
constructor(private formbuilder: FormBuilder,private router: ActivatedRoute,private dataservice:DataService,
  private http :HttpClient
){
 
}


  // ngOnInit(){
    
  //   this.id = this.router.snapshot.params['id'];
  //   this.dataservice.getHotel(this.id).subscribe(
  //     (data)=>{
  //       this.hotel = data;
  //       console.log(this.id)
  //       console.log(this.hotel.name)
      
    
  //   this.bookingForm = this.formbuilder.group({
  //   hotel:[this.hotel.name,[Validators.required]],
  //    start_date:[null,[Validators.required]],
  //    end_date:[null,[Validators.required]],
  //    guest_name:[null,[Validators.required]],
  //    guest_email:[null,[Validators.required,Validators.email]],
  //    guest_phone:[null,[Validators.required,Validators.maxLength(10)]],
  //   }      
  //   )
  // })

  // }

  ngOnInit() {
    this.bookingForm = this.formbuilder.group({
      hotel: [null, [Validators.required]],
      start_date: [null, [Validators.required]],
      end_date: [null, [Validators.required]],
      guest_name: [null, [Validators.required]],
      guest_email: [null, [Validators.required, Validators.email]],
      guest_phone: [null, [Validators.required, Validators.maxLength(10)]],
    });
    // Get the hotel ID from the route
    this.id = this.router.snapshot.params['id'];

    // Fetch the hotel data
    this.dataservice.getHotel(this.id).subscribe(
      (data) => {
        this.hotels = data; // Correct variable name
        console.log(this.id);
        console.log(this.hotels.name);

        // Update the form with hotel data after fetching it
        this.bookingForm.patchValue({
          hotel: this.hotels.id, // Update the hotel field in the form
        });
      },
      (error) => {
        console.error('Error fetching hotel data:', error);
      }
    );
  }

  booked(){
    if (this.bookingForm.valid){
      const bookingData = this.bookingForm.value;
      this.http.post('http://127.0.0.1:8000/api/bookings/',bookingData).subscribe(

      


      
      
        (response)=>{
          console.log("Booking Submitted")
          console.log(response)

        },
        (error)=>{
          console.log("Error")
          console.log(error)
        }
      )

    }
  }




}
