import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form')
  addPropertyForm!: NgForm;

constructor(private router: Router) {

  }

  onBack() {
this.router.navigate(['/'])
  }
  ngOnInit(): void {
  }
  onSubmit(Form : NgForm) {
    console.log('Submit was executed.')
    console.log(Form);
    console.log(this.addPropertyForm)
  }

}

