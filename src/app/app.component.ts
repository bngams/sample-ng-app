import { Component, ViewChild } from '@angular/core';
import { CityCardsComponent } from 'src/app/city-cards/city-cards.component';
import { TranslateService } from '@ngx-translate/core';
import { CitiesService } from './city-service/cities.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // cities in parent injected via input
  allCities: any[];
  // newCity in parent injected via input
  newCity: any;

  // ChildView
  @ViewChild(CityCardsComponent) cards: CityCardsComponent;

  constructor(private translate: TranslateService, private citiesService: CitiesService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  addCity(name: string, strategy: string) {
    console.log(name);
    let city = { id: 3, name: name, temp: 25 };
    this.citiesService.fetchCity(name).then((res) => {
      city = res[0];
      console.log(city);
      switch (strategy) {
        case 'viewChildren':
          // update children value
          this.cards.cities.push(city);
          break;
        case 'allFromParent':
          // update parent value
          this.allCities.push(city);
          break;
        case 'newFromParent':
          // update parent value => ngOnChange
          this.newCity = city;
          break;
        default:
          break;
      }
    });


  }
}
