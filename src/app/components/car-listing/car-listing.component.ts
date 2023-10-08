import { Component, OnInit  } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { CarEntry } from 'src/app/car-entry.model';
import { CarGeneratorService } from 'src/app/services/car-generator.service';

@Component({
  selector: 'app-car-listing',
  templateUrl: './car-listing.component.html',
  styleUrls: ['./car-listing.component.scss']
})
export class CarListingComponent {
  allCars: CarEntry[];
  constructor(private carGeneratorService: CarGeneratorService) {
    this.allCars = carGeneratorService.getAllCars();
  }
}