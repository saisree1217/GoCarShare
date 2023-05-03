import { DatePipe } from '@angular/common';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

declare const L
@Component({
  selector: 'app-carlendee',
  templateUrl: './carlendee.component.html',
  styleUrls: ['./carlendee.component.css']
})
export class CarlendeeComponent implements OnInit {

  constructor(private http:HttpClient,private datePipe: DatePipe) {} 
  latitude:any;
  longitude:any;
  radius:number;
  availableFrom:Date
  availableTo:Date
  availableFromTime:string
  availableToTime:string
  formattedFromDate: string;
  formattedToDate: string;
  selectedAmPmFrom:string;
  selectedAmPmTo:string;
  zoom:13;
  center:google.maps.LatLngLiteral ={lat:24,lng:12};
  bounds:google.maps.LatLngBoundsLiteral={
    east:10,
    north:10,
    west:-10,
    south:-10
  }
  idToken = localStorage.getItem('idToken');
  headers = new HttpHeaders({
    'Authorization': "Bearer "+this.idToken
    });

  ngOnInit(): void {
    
    
   
  }
  onRadius(radius:number)
  {
    this.radius=radius;
  }
  onAvailableFrom(availableFrom:Date)
  {
    this.availableFrom=availableFrom
  }
  onAvailableTo(availableTo:Date)
  {
    this.availableTo=availableTo
  }
  onAvailableFromTime(availableFromTime:string)
  {
    this.availableFromTime=availableFromTime
  }
  onAvailableToTime(avialableToTime:string)
  {
    this.availableToTime =avialableToTime
  }

  getLocation(){
    if(!navigator.geolocation){
      console.log("loc not supported");
    }
    navigator.geolocation.getCurrentPosition((position) =>{
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);

       this.latitude=position.coords.latitude;
       this.longitude=position.coords.longitude;
       
     
    });
  }
  findVehicles(){
    this.formattedFromDate = this.datePipe.transform(this.availableFrom, 'MM/dd/yyyy');
  // this.formattedFromDate=this.formattedFromDate.replace(/-/g, ':')
  this.formattedToDate = this.datePipe.transform(this.availableTo,'MM/dd/yyyy')
  // console.log(this.formattedDate)
  let fromTime =this.formattedFromDate+":"+this.availableFromTime+":"+this.selectedAmPmFrom
  let toTime=this.formattedToDate+":"+this.availableToTime+":"+this.selectedAmPmTo
  console.log("From time",fromTime)
  console.log("To Time",toTime)
  let postUrl:string ='http://34.122.10.135/api/schedule/find/find-vehicles'
  let Body ={
    "radius": this.radius,
    "latitude": this.latitude,
    "longitude": this.longitude,
    "startDate": fromTime,
    "endDate": toTime
    

  }
  this.http.post(postUrl,Body,{headers: this.headers})
  .subscribe((data:any) =>{
    console.log(data)
  })
  }
}
