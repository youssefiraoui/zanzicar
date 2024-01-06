import { Component, OnInit  } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';
import { Car, CarEntry, Filter } from 'src/app/car-entry.model';
import { CarGeneratorService } from 'src/app/services/car-generator.service';

@Component({
  selector: 'app-car-listing',
  templateUrl: './car-listing.component.html',
  styleUrls: ['./car-listing.component.scss']
})
export class CarListingComponent implements OnInit{

  allCars: Car[];
  filteredItems : Car[];
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
    this.filter =  { 
      renault : false,
      dacia : false,
      bmw: false,
      toyota: false,
      citroin: false,
      automatique: false,
      manual: false,
    }
    this.allCars = this.carGeneratorService.getAllCars();
    }

    FilterCars(){
      console.log(this.filter);
      console.log(this.allCars);

      this.allCars = this.allCars.filter((car) => {
        return (
         ( ( !this.filter.renault || car.model.includes('Renault')) ||
          ( !this.filter.dacia || car.model.includes('Dacia')) ||
          ( !this.filter.bmw || car.model.includes('BMW')) ||
          ( !this.filter.toyota || car.model.includes('TOYOTA')) ||
          ( !this.filter.citroin || car.model.includes('CITROÏN')) )
          && ( ( !this.filter.automatique || car.transmission == "Automatic"))
        )
      });
      // this.allCars = this.allCars.filter((car) => {
      //   return (
      //     ( !this.filter.automatique || car.transmission == "Automatic")
      //     )
      //   });
    }

  apply() {
     this.FilterCars(); 
    }
      
}