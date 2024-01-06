import { Component } from '@angular/core';
import { Car, CarEntry } from 'src/app/car-entry.model';
import { CarGeneratorService } from 'src/app/services/car-generator.service';

@Component({
  selector: 'app-popular-cars',
  templateUrl: './popular-cars.component.html',
  styleUrls: ['./popular-cars.component.scss'],
})
export class PopularCarsComponent {
  allCars: Car[];
  constructor(private carGeneratorService: CarGeneratorService) {
    this.allCars = carGeneratorService.getPopularCars();
  }
}
