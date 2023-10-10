import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarListingComponent } from './components/car-listing/car-listing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RentNowComponent } from './components/rent-now/rent-now.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'car-listing', component: CarListingComponent },
  { path: 'car/:id/rent', component: RentNowComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: '404' },
  { path: '404',component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
