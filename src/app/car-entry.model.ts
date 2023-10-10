export interface CarEntry {
  model_name: string;
  model: string;
  fuel: string;
  transmission: string;
  year: number;
  color: string;
  price: number;
  body: string;
  mileage: number;
  doors: number;
  make: string;
  engine_power: number;
  img: string;
  persons: number;
  rating:number;
  city:string;
  address:string;
}

export interface Filter {
  renault : boolean;
  dacia : boolean;
  bmw: boolean;
  toyota: boolean;
  citroin: boolean;

  automatique: boolean;
  manual: boolean;
}
