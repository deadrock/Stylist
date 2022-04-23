import { HousingService } from './service/housing.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes , RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';


//import {  AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';

const appRoutes: Routes = [
  {    path: '',    component: PropertyListComponent  }
  ,{    path: 'add-property',    component: AddPropertyComponent  }
  ,{    path: 'rent-property',    component: AddPropertyComponent  }
  ,{    path: 'property-detail/:id',    component: PropertyDetailComponent  }

]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [ HousingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
