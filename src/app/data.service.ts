import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  
  api='http://127.0.0.1:8000/api'
  private hotelsCache: any;
  private hotel:any;
  
  getHotels():Observable<any>{
    if(this.hotelsCache){
      
      return of(this.hotelsCache)
    } else{
    return this.http.get(`${this.api}/hotels`).pipe(
      tap(data=>this.hotelsCache=data)
    )
     
  }
}

// getHotel(id: number): Observable<any> {
//   if (this.hotel && this.hotel.id === id) {
    
//     return of(this.hotel); // Return cached data if it matches the requested ID
//   } else {
//     return this.http.get(`${this.api}/hotels/${id}`).pipe(
//       tap(data => {
//         this.hotel = data;
//       })
//     );
getHotel(id: number): Observable<any> {
  if (this.hotel && this.hotel.id === id) {
    console.log(this.hotel);
    return of(this.hotel); // Return cached data if it matches the requested ID
  } else {
    return this.http.get(`${this.api}/hotels/${id}`).pipe(
      tap(data => {
        this.hotel = data;
      })
    );
  }}

  getUsers():Observable<any>{
    return this.http.get(`${this.api}/getUsers/`)
  }

  // filterHotel(name:any,city:any,price_per_night:any):Observable <any>{
  //   if (name && city && price_per_night){
  //     const url = `${this.api}/search/?name=${name}&city=${city}&price_per_night=${price_per_night}`;
  //     console.log(url)
  //     return this.http.get(url)

  //   } 
  //   if (name && city){
  //     const url = `${this.api}/search/?name=${name}&city=${city}`
  //     console.log(url)
  //     return this.http.get(url)
  //   }  
    
  //   if (name){
  //     const url= `${this.api}/search/?name=${name}`
  //     console.log(url)
  //     return this.http.get(url)
  //   }
     
    
  //   else{
  //     return this.http.get(`${this.api}/search/`)
  //   }
  // }

  filterHotel(name: any, city: any, price_per_night: any): Observable<any> {
    // Initialize an array to hold query parameters
    const params = [];

    // Add parameters based on their presence
    if (name) {
        params.push(`name=${encodeURIComponent(name)}`);
    }
    
    if (city) {
        params.push(`city=${encodeURIComponent(city)}`);
    }
    
    if (price_per_night) {
        params.push(`price_per_night=${encodeURIComponent(price_per_night)}`);
    }
    
    // Construct the final URL
    const queryString = params.length ? `?${params.join('&')}` : '';
    const url = `${this.api}/search/${queryString}`;
    
    console.log(`Request URL: ${url}`); // Log the full URL for debugging
    return this.http.get(url);
}

createUser(userdata:any):Observable<any>{
  return this.http.post(`${this.api}/register/`,userdata);
}

updateprofile(userdata:any):Observable<any>{
  return this.http.patch(`${this.api}/updateprofile/`,userdata);
}

loginUser(useradata:any):Observable<any>{
  return this.http.post(`${this.api}/login/`,useradata, {withCredentials:true}) //get the cookie
}



user():Observable <any>{
 
  return this.http.get(`${this.api}/user/`,{withCredentials:true}) // send credentials
}

getUserData(): Observable<any> {
  return this.http.get(`${this.api}/user/`, { withCredentials: true });
}

// user(): Observable<any> {
  // const token = localStorage.getItem('token'); // Retrieve the token
  // const headers = {
  //     'Authorization': `Bearer ${token}`, // Set the Authorization header
  //     'Content-Type': 'application/json'
  // };

//   return this.http.get(`${this.api}/user/`, { headers, withCredentials: true }); // Send credentials
// }


 

    
//   filterHotel(name: any, city: any, price_per_night: any): Observable<any> {
//     const params: { [key: string]: any } = {};

//     if (name) {
//         params['name'] = name;  
//     }
//     if (city) {
//         params['city'] = city;  
//     }
//     if (price_per_night !== null && price_per_night !== undefined) {
//         params['price_per_night'] = price_per_night;  
//     }

//     console.log(`Calling API with parameters:`, params); 
//     return this.http.get(`${this.api}/search/`, { params });
// }


  }


// book(bookingData:any):Observable<any>{
//   return this.http.post(`${this.api}/bookings`,bookingData);
// }





// getHotel(id:number):Observable<any>{
//   if(this.hotel){
//     return of(this.hotel)

//   }else{
//   return this.http.get(`${this.api}/hotels/${id}`).pipe(
//     tap(data=>{this.hotel=data})
    
//   )
// }



  

  // getHotels(): Observable<any> {
  //   if (this.hotelsCache) {
  //     return of(this.hotelsCache);
  //   } else {
  //     return this.http.get(`${this.api}/hotels`).pipe(
  //       tap(data => this.hotelsCache = data)
  //     );
  //   }
  // }


  


  




// tap
// The tap operator is part of RxJS and is used for side effects. It allows you to perform actions with the data emitted by an Observable without modifying the data. In this context, tap is used to cache the data fetched from the API:

// typescript
// Copy code
// tap(data => this.hotelsCache = data)
// Purpose: When the Observable emits data (i.e., when the HTTP request is successful), tap executes the provided function. Here, it sets this.hotelsCache to the data fetched from the API.
// Benefit: This caching mechanism ensures that subsequent calls to getHotels return the cached data instead of making another HTTP request.
// of
// The of function is used to create an Observable that emits the provided value(s) immediately. It's a quick way to create an Observable from static data.

// typescript
// Copy code
// return of(this.hotelsCache);
// Purpose: If hotelsCache is already populated, of(this.hotelsCache) creates an Observable that emits the cached data.
// Benefit: This allows the service to return the cached data as an Observable, providing a consistent interface whether the data is coming from the cache or the HTTP request.
// pipe
// The pipe method is used to compose multiple Observable operators. It takes any number of Observable operators as arguments and returns a new Observable.

// typescript
// Copy code
// return this.http.get(`${this.api}/hotels`).pipe(
//   tap(data => this.hotelsCache = data)
// );
// Purpose: pipe allows you to chain operators together. Here, it chains the tap operator to the Observable returned by this.http.get.
// Benefit: This makes the code more readable and modular by separating the data fetching logic (HTTP GET request) from the side-effect logic (caching the data).