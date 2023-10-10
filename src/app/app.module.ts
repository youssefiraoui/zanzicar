import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PopularCarsComponent } from './components/popular-cars/popular-cars.component';
import { FactsComponent } from './components/facts/facts.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SearchBannerComponent } from './components/search-banner/search-banner.component';
import { CarOverviewComponent } from './components/car-overview/car-overview.component';
import { CarListingComponent } from './components/car-listing/car-listing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StarRatingModule } from 'angular-star-rating';
import { RentNowComponent } from './components/rent-now/rent-now.component';
import { TostringPipe } from './tostring.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent,
    HeaderComponent, FooterComponent, HeroComponent,
    HowItWorksComponent, PopularCarsComponent,
    FactsComponent, ContactUsComponent, SearchBannerComponent,
    CarOverviewComponent, CarListingComponent, PageNotFoundComponent, RentNowComponent,
    TostringPipe],
  imports: [BrowserModule, AppRoutingModule,FormsModule, StarRatingModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
