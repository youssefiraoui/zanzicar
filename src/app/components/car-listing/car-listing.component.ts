import { Component, OnInit  } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { CarEntry, Filter } from 'src/app/car-entry.model';
import { CarGeneratorService } from 'src/app/services/car-generator.service';

@Component({
  selector: 'app-car-listing',
  templateUrl: './car-listing.component.html',
  styleUrls: ['./car-listing.component.scss']
})
export class CarListingComponent implements OnInit{

  allCars: CarEntry[];
  filteredItems : CarEntry[];
  constructor(private carGeneratorService: CarGeneratorService) {
   
  }

  filter: Filter = { 
    renault : false,
    dacia : false,
    bmw: false,
    toyota: false,
    citroin: false,
    automatique: false,
    manual: false,
  }

  ngOnInit() {
    this.allCars = this.carGeneratorService.getAllCars();
  }

  reset() {
    throw new Error('Method not implemented.');
    }

    FilterCars(){
      this.allCars = this.allCars.filter((car) => {
        return (
         ( !this.filter.renault || car.model_name.includes('Renault')) &&
         ( !this.filter.dacia || car.model_name.includes('Dacia'))
        )
      });
    }

  apply() {
     this.FilterCars(); 
    }
      
}