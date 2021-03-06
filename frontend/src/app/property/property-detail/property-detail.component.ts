import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId: number;
  constructor( private route: ActivatedRoute, private router: Router) {
  this.propertyId = Number(this.route.snapshot.params['id']);

    this.route.params.subscribe(
      (params) => {
        this.propertyId=+params['id']  // the + makes the string a number'
      }
    )


   }

   onSelectedNext() {
this.propertyId += 1;
this.router.navigate(['property-detail', this.propertyId])
   }

  ngOnInit(): void {
  }

}
