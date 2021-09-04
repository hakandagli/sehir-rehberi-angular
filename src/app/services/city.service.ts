import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private httpClient: HttpClient,
    
  ) { }

  path = "http://localhost:3000/";
  
  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(this.path + "cities");
  }

  getCityById(cityId:any):Observable<City>{
    return this.httpClient.get<City>(this.path+"cities/"+cityId);
  }

  getPhotosByCity(cityId:any):Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(this.path+"photos/?cityId="+cityId);
  }

  add(city: any){
    this.httpClient.post(this.path + 'cities', city).subscribe();
   
  }
}
