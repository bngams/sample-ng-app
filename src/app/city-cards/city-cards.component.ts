import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-cards',
  templateUrl: './city-cards.component.html',
  styleUrls: ['./city-cards.component.css']
})
export class CityCardsComponent implements OnInit, OnChanges {
  // all cities input from parent
  @Input() citiesFromParent: any[];
  // newCity input from parent
  @Input() newCity: any = {};
  // cities child attribute
  cities: any[];

  constructor() {
    this.cities = [
      // { id: 1, name: 'tls', temp: 24 },
      // { id: 2, name: 'bdx', temp: 24 }
    ];
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    // => we can listen changes from inputs
    // from citiesFromParent or newCity
  }

}
