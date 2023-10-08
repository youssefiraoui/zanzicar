import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarEntry } from 'src/app/car-entry.model';
import { CarGeneratorService } from 'src/app/services/car-generator.service';

@Component({
  selector: 'app-rent-now',
  templateUrl: './rent-now.component.html',
  styleUrls: ['./rent-now.component.scss']
})
export class RentNowComponent {
  constructor(private route: ActivatedRoute, private carService:CarGeneratorService) { }
 id:any;
 car:CarEntry;

 carImageSources:string[];

  ngOnInit(): void {
   
    this.id = this.route.snapshot.paramMap.get('id');
    this.car = this.carService.getCarById(this.id);
    this.carImageSources = [
      '/src/assets/images/slider-01.jpg',
      '/src/assets/images/slider-02.jpg',
      '/src/assets/images/slider-03.jpg',
      '/src/assets/images/slider-04.jpg',
      '/src/assets/images/slider-05.jpg'];
  }

  
}
