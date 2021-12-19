import { IProperty } from './../IProperty.interface';
import { HousingService } from './../../service/housing.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty>;

  constructor(private housingService: HousingService) {
    this.properties = [];
  }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe({
      next: (data) => {
        this.properties = data;
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('COMPLETED -- HousingService.getAllProperties');
      },
    });
  }
}
