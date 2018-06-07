import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent implements OnInit {

  @Output() submit = new EventEmitter<string>();
  cityName = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit');
    this.submit.emit(this.cityName);
  }

}
