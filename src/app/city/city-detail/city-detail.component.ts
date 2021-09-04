import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
  providers: [CityService]
})

export class CityDetailComponent implements OnInit {
  city?: City;
  photos?:Photo[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CityService
  ) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCityById(params["cityId"]);
      this.getPhotosByCity(params["cityId"]);
    })
  }

  getCityById(cityId: any): void {
    this.cityService.getCityById(cityId)
      .subscribe(data => this.city = data);
  }

  getPhotosByCity(cityId:any){
    console.log(cityId);
    this.cityService.getPhotosByCity(cityId).subscribe(data=>{
      this.photos=data;
    })
  }

  

 

}
