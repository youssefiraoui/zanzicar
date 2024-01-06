import { Component, Injectable } from '@angular/core';
import { Car, CarEntry } from '../car-entry.model';

@Injectable({
  providedIn: 'root',
})
export class CarGeneratorService {
/*
Renault Clio 4
Renault Clio 4 BVA
Peugeot 301
Hyundai accent BVA
Dacia Logan
Dacia Sandero streetway

*/
  cars: Car[] =[
    {
      model :'Renault Clio 4',
      transmission : 'Automatique',
      climatisation : true,
      nb_persons : 5,
      nb_valise :5,
      imgs :[
        '../../../assets/images/car-01.jpg',
        '../../../assets/images/car-02.jpg'
      ]
    },
    {
      model :'Renault Clio 4 BVA',
      transmission : 'Manuel',
      climatisation : true,
      nb_persons : 5,
      nb_valise :5,
      imgs :[
        '../../../assets/images/car-01.jpg',
        '../../../assets/images/car-02.jpg'
      ]
    },
    {
      model :'Peugeot 301',
      transmission : 'Automatique',
      climatisation : true,
      nb_persons : 5,
      nb_valise :5,
      imgs :[
        '../../../assets/images/car-01.jpg',
        '../../../assets/images/car-02.jpg'
      ]
    },
    {
      model :'Hyundai accent BVA',
      transmission : 'Automatique',
      climatisation : true,
      nb_persons : 5,
      nb_valise :5,
      imgs :[
        '../../../assets/images/car-01.jpg',
        '../../../assets/images/car-02.jpg'
      ]
    },
    {
      model :'Dacia Logan',
      transmission : 'Automatique',
      climatisation : true,
      nb_persons : 5,
      nb_valise :5,
      imgs :[
        '../../../assets/images/car-01.jpg',
        '../../../assets/images/car-02.jpg'
      ]
    },
    {
      model :'Dacia Sandero streetway',
      transmission : 'Manuel',
      climatisation : true,
      nb_persons : 5,
      nb_valise :5,
      imgs :[
        '../../../assets/images/car-01.jpg',
        '../../../assets/images/car-02.jpg'
      ]
    }
  ]
  //carEntries: CarEntry[] = [];
  dispayedCars: Car[] =[];
  imageIndex = 0;
  // private modelNames = [
  //   'Toyota Corolla',
  //   'Dacia Logan',
  //   'BMW X1',
  //   'Renault Clio 4',
  //   'Hyundai i10',
  //   'Toyota Qashqai',
  //   'Ford Fiesta',
  // ];
  // private makes = [
  //   'Toyota',
  //   'Dacia',
  //   'BMW',
  //   'Citroin',
  //   'Renault',
  //   'Hyundai',
  //   'Nissan',
  //   'Mercedes-Benz',
  //   'Ford',
  //   'Audi',
  // ];
  // private fuels = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
  // private transmissions = ['Automatic', 'Manual'];
  // private colors = ['Red', 'Blue', 'Silver', 'White', 'Black'];
  // private years = Array.from({ length: 13 }, (_, i) => 2010 + i);
  // private prices = [65, 41, 67, 50, 100];
  // private bodyTypes = ['Sedan', 'Hatchback', 'SUV', 'Crossover', 'Convertible'];
  // private mileages = Array.from({ length: 19 }, (_, i) => 10 + i * 5);
  // private doors = [2, 4, 5];
  // private persons = [2, 4, 6, 7];
  // private enginePowers = [100, 150, 200, 250, 300];
  // private ratings = [3, 4, 5];
  // private germanCities = [
  //   "Berlin",
  //   "Hamburg",
  //   "Munich",
  //   "Cologne",
  //   "Frankfurt",
  //   "Stuttgart",
  //   "Düsseldorf",
  //   "Dortmund",
  //   "Essen",
  //   "Leipzig"
  // ];
  // private addresses: string[] = [
  //   'Alexanderplatz 1, 10178 Berlin',
  //   'Schlossplatz 5, 70173 Stuttgart',
  //   'Königsallee 11, 40212 Düsseldorf',
  //   'Brandenburger Straße 2, 14467 Potsdam',
  //   'Mönckebergstraße 1, 20095 Hamburg',
  //   'Kurfürstendamm 25, 10719 Berlin',
  //   'Maximilianstraße 17, 80539 Munich',
  //   'Altstadt 6, 60311 Frankfurt',
  //   'Friedrichstraße 101, 10117 Berlin',
  //   'Prinzipalmarkt 7, 48143 Münster',
  //   'Domplatz 20, 39104 Magdeburg',
  //   'Am Markt 9, 04109 Leipzig',
  //   'Neue Straße 12, 79098 Freiburg',
  //   'Hohenzollernring 16, 50672 Cologne',
  //   'Theaterplatz 2, 01067 Dresden'
  // ];
  // private imageSrcs = [
  //   '../../../assets/images/car-01.jpg',
  //   '../../../assets/images/car-02.jpg',
  //   '../../../assets/images/car-03.jpg',
  //   '../../../assets/images/car-04.jpg',
  //   '../../../assets/images/car-05.jpg',
  //   '../../../assets/images/car-06.jpg',
  //   '../../../assets/images/car-07.jpg',
  //   '../../../assets/images/car-09.jpg',
  // ];
  constructor() { }

  getPopularCars(): Car[] {
    this.dispayedCars = this.cars.splice(0,3);
    return this.dispayedCars;
  }

  getAllCars(): Car[] {
    this.dispayedCars = this.cars;
    return this.dispayedCars;
  }
  getCarById(id: number) {
    //return this.generateCarEntry(true);
    return this.cars[1];
  }
  // private generateCarEntry(uniqueImage: boolean): CarEntry {
  //   const carEntry: CarEntry = {
  //     model_name: this.getRandomValueFromArray(this.modelNames),
  //     model: '',
  //     fuel: this.getRandomValueFromArray(this.fuels),
  //     transmission: this.getRandomValueFromArray(this.transmissions),
  //     year: this.getRandomValueFromArray(this.years),
  //     color: this.getRandomValueFromArray(this.colors),
  //     price: this.getRandomValueFromArray(this.prices),
  //     body: this.getRandomValueFromArray(this.bodyTypes),
  //     mileage: this.getRandomValueFromArray(this.mileages),
  //     doors: this.getRandomValueFromArray(this.doors),
  //     make: this.getRandomValueFromArray(this.makes),
  //     engine_power: this.getRandomValueFromArray(this.enginePowers),
  //     img: this.getuniqueImage(),
  //     persons: this.getRandomValueFromArray(this.persons),
  //     rating: this.getRandomValueFromArray(this.ratings),
  //     city: this.getRandomValueFromArray(this.germanCities),
  //     address: this.getRandomValueFromArray(this.addresses)
  //   };

  //   return carEntry;
  // }

  private getRandomValueFromArray(array: any[]): any {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  private getuniqueImage(): any {
    //return this.imageSrcs[this.imageIndex++ % this.imageSrcs.length];
  }
}
