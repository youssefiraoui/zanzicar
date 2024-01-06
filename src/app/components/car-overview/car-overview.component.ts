import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-overview',
  templateUrl: './car-overview.component.html',
  styleUrls: ['./car-overview.component.scss'],
})
export class CarOverviewComponent {
  @Input() model: string | undefined;
  @Input() transmission: string | undefined;
  @Input() persons: number | undefined;
  @Input() climatisation: boolean | false;
  @Input() nb_persons: number | undefined;;
  @Input() nb_valise: number | undefined;;
 // @Input() imgs: string[] | [];;
 //img : string = '../../../assets/images/car-01.jpg'
 img : string = '../../../assets/imgs/clio4_1.jpg'



  constructor(private router: Router) {

  }

  navigate() {
    this.router.navigate(["car/1/rent"]);
  }
}
