import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-carlender',
  templateUrl: './carlender.component.html',
  styleUrls: ['./carlender.component.css']
})
export class CarlenderComponent implements OnInit {
  carColor: string = ''
  carInventoryId: string = ''
  isRegisterButtonClicked: boolean = false
  selectedCarIndex: number = -1
  searchInput:string;
  carsRefinedByBodyStyle: CarRefinedByBodyStyle[] = []
  userVehicles: UserVehicles[] = []
  constructor(private http: HttpClient) {
    
   }
   baseurl="http://34.122.10.135:80/api/auth/search?q=";
   url:any;
   idToken = localStorage.getItem('idToken');
   headers = new HttpHeaders({
  'Authorization': "Bearer "+this.idToken
  });
  
   
  ngOnInit(): void {
    this.http.get('http://34.122.10.135:80/api/user/vehicle/vehicle',{headers : this.headers})
    .subscribe((data: any) => {
      alert(data.userVehicles.length)
      console.log(data.userVehicles)
      let userVehicles1=data.userVehicles;
      let vehicles: UserVehicles[] =[]
      for(let i=0;i<userVehicles1.length;i++)
      {
        vehicles.push({
          'bodyStyle': userVehicles1[i].bodyStyle,
          'color': userVehicles1[i].color,
          'make': userVehicles1[i].make,
          'registeredOn': userVehicles1[i].registeredOn,
          'year':userVehicles1[i].year
          
          
      })
  }
  this.userVehicles = vehicles
  console.log("vehicles array:",vehicles)
  console.log("userVehicles array",userVehicles1)
})
    
  }


  showDropdown = false;
  carList: any[] = [];
  onChangeCarColor(carColor: string){
    this.carColor = carColor
  }
  onsearchInput(searchInput:string){
    this.searchInput =searchInput
  }

  onChangeCarInventoryId(carInventoryId: string){
    this.carInventoryId = carInventoryId
  }

  submitRegistration(index: number){
    console.log(this.carsRefinedByBodyStyle[index])
    console.log(this.carColor)
    console.log(this.carInventoryId)
    let postUrl: string =  'http://34.122.10.135:80/api/user/vehicle/register'
    let Body = {
    "make": this.carsRefinedByBodyStyle[index].make,
    "model": this.carsRefinedByBodyStyle[index].model,
    "year": this.carsRefinedByBodyStyle[index].year,
    "color": this.carColor,
    "inventoryId": '',
    "bodyStyle": this.carsRefinedByBodyStyle[index].body_styles
    }
    this.http.post(postUrl,Body,{headers : this.headers})
    .subscribe((data: any) => {
      console.log(data)
      alert("Registration of vehicle successful");
    })
   this.carsRefinedByBodyStyle=[]
   
    
  }

  register(index: number){
    this.isRegisterButtonClicked = true
    this.selectedCarIndex = index
  }

  searchCars(){
    const carList=[]
     this.url=this.baseurl + this.searchInput;
   // alert(this.url);
    //alert(this.idToken)
    this.http.get(this.url,{headers : this.headers})
    .subscribe((data: any) => {
    console.log(data);
    let carResults: Car[] = data.cars
    console.log(carResults)
    let refined : CarRefinedByBodyStyle[] = []
    for(let i=0; i< carResults.length; i++)
    {
      for(let j=0; j<carResults[i].body_styles.length; j++)
      {
        refined.push({
          'body_styles' : carResults[i].body_styles[j],
          'make' : carResults[i].make,
          'model' : carResults[i].model,
          'model_id' : carResults[i].model_id,
          'year' : carResults[i].year})
      }
    }
    console.log(refined)
    this.carsRefinedByBodyStyle = refined
    // const select=data
    carList.push(data.cars[0])//Hemanth
    alert(typeof(carList[0]))
    alert(carList[0]) //Hemanth
    this.carList = carList[0]; //Hemanth
    console.log(this.carList) //Hemanth
    this.showDropdown = true;  //Hemanth
    console.log(this.carList[0].make)
})

   
    // cars= new FormControl('');

    
    // ListofCars: carList[0]

}

    
}

class Car{
  body_styles : string[]
  make : string
  model: string
  model_id: string
  year: number
}

class CarRefinedByBodyStyle{
  body_styles : string
  make : string
  model: string
  model_id: string
  year: number
}

class UserVehicles{
  bodyStyle: string
  color: string
  make: string
  registeredOn: string
  year:number
}